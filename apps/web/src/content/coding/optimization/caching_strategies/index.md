# Template: Multi-Layer Caching Architecture

Use this template to design a resilient and high-performance caching strategy for your system. It is designed to act as a Systems Architect and Middleware Expert—implementing caching at the [DATABASE_LEVEL] (Redis), [APPLICATION_LEVEL] (Memoization), [BROWSER_LEVEL] (Cache-Control), and [CDN_LEVEL] (Edge Caching) to ensure rapid response times and reduced server load.

## 📋 Prompt Template

```text
Act as a Senior Systems Architect and Performance Expert. Design a multi-layer caching strategy for [SYSTEM_DESCRIPTION].

### System Context:
- **Major Bottleneck**: [e.g., Heavy DB queries for the product catalog, slow external API calls, high static asset traffic].
- **Tech Stack**: [e.g., Node.js with Redis, Next.js on Vercel, Python with Memcached].
- **Data Freshness Requirement**: [e.g., Must be real-time, can be 5 minutes stale, eventually consistent].

### Caching Requirements:
1. **Server-Side Cache (Redis/Memcached)**: Provide a [CACHE_PATTERN] (e.g., Cache-Aside, Write-Through) for the [SPECIFIC_DATA_ENTITY].
2. **Client-Side Cache (Browser)**: Define the correct [CACHE-CONTROL_HEADERS] for static assets vs dynamic API responses.
3. **Memoization Layer**: Suggest where to use [IN-MEMORY_MEMOIZATION] effectively in the backend code.
4. **Invalidation Strategy**: Decribe the [CACHE_PURGING_LOGIC] (e.g., TTL expiration, event-driven purging on DB update).
5. **Edge Caching (CDN)**: Design a [STALE-WHILE-REVALIDATE] strategy for the global edge network.

### Output Constraints:
- Use a Technical, Scalable, and Logical tone.
- Present the strategy as a "Cache Map" showing all 4 layers.
- Conclude with "The Cache-Hit Ratio Goal"—a target percentage for production.
```

## 🧩 Variables to Fill Out

- `[SYSTEM_DESCRIPTION]` - e.g., A high-traffic e-commerce store, a global news site.
- `[CACHE_PATTERN]` - Cache-aside, Read-through, Write-through.
- `[STALE-WHILE-REVALIDATE]` - Serving old data while fetching new.
- `[INVALIDATION_STRATEGY]` - The hardest problem in computer science.

## 💡 Pro-Tips

- **Naming is Hard, Invalidation is Harder:** Caching stale data is dangerous. Ask the AI to: "Design a [VERSIONED_CACHE_KEY] strategy (e.g., `user:123:v1`) to prevent serving old data."
- **Use "Cache-Aside" for Most DBs:** The most common pattern. The app [CHECKS_REDIS_FIRST], then the DB, and then updates Redis. Ask for: "A pseudocode implementation of the Cache-Aside pattern."
- **Don't Cache Sensitive Data:** Never cache [PERSONAL_USER_DATA] (like PII) at the CDN level. Ask the AI to: "Audit the [CACHE-CONTROL] headers for 'Private' vs 'Public' markings."
---
