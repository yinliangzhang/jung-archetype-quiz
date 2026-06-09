const FORM_NAME = "quiz-leads";
const ARCHETYPE_NAMES = {
  Innocent: "天真者",
  Everyman: "平凡者",
  Hero: "英雄",
  Caregiver: "照顾者",
  Explorer: "探索者",
  Rebel: "反叛者",
  Lover: "爱人",
  Creator: "创造者",
  Ruler: "统治者",
  Magician: "魔法师",
  Sage: "智者",
  Jester: "小丑"
};

export default async function submitLead(request, context) {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const body = await request.json();
    const contact = body.contact ?? {};
    const result = body.result ?? {};
    const topThree = result.topThree ?? [];

    if (!contact.nickname || !contact.phone || topThree.length < 3) {
      return jsonResponse({ error: "Invalid lead payload" }, 400);
    }

    const [primary, secondary, hidden] = topThree;
    const geo = context.geo ?? {};
    const country = geo.country?.name ?? geo.country?.code ?? "";
    const region = geo.subdivision?.name ?? geo.subdivision?.code ?? "";
    const city = geo.city ?? "";
    const visitorIp = context.ip ?? "";
    const origin = new URL(request.url).origin;

    const formData = new URLSearchParams({
      "form-name": FORM_NAME,
      nickname: contact.nickname,
      phone: contact.phone,
      visitor_ip: visitorIp,
      visitor_country: country,
      visitor_region: region,
      visitor_city: city,
      primary_archetype: formatArchetype(primary),
      secondary_archetype: formatArchetype(secondary),
      hidden_archetype: formatArchetype(hidden),
      scores: JSON.stringify(result.scores ?? {}),
      completed_at: result.completedAt ?? "",
      submitted_at: contact.submittedAt ?? new Date().toISOString(),
      page_url: body.pageUrl ?? "",
      "bot-field": ""
    });

    const formResponse = await fetch(`${origin}/__forms.html`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formData.toString()
    });

    if (!formResponse.ok) {
      return jsonResponse({ error: "Form submission failed" }, 502);
    }

    return jsonResponse({
      ok: true,
      visitor_ip: visitorIp,
      visitor_country: country,
      visitor_region: region,
      visitor_city: city
    });
  } catch (error) {
    console.error("submit-lead failed", error);
    return jsonResponse({ error: "Lead submission failed" }, 500);
  }
}

export const config = {
  path: "/api/submit-lead"
};

function formatArchetype(item) {
  const archetype = item.archetype ?? "";
  const chineseName = ARCHETYPE_NAMES[archetype] ?? archetype;
  return `${chineseName} / ${archetype} / ${item.score ?? 0}分`;
}

function jsonResponse(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
