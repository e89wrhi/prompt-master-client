# Examples: Multi-Layer Caching

## 1. Redis Caching for Product Catalog (Node.js)

```text
Act as a Systems Architect. Design a Cache-Aside strategy for a high-traffic product catalog.

### Context:
- **Bottleneck**: Complex SQL JOINs on the product table.
- **Goal**: Reduce DB load by 80%.
- **TTL**: 1 hour.

### Requirements:
1. Provide the pseudocode for the cache check/update logic.
2. Design the cache-key naming convention (e.g., `prod:list:filter_x`).
3. Suggest how to invalidate the cache when a product price changes.

### Output Constraints:
- Logical and Scalable tone.
- Cache Map included.
```

## 2. Browser Caching for a Marketing Site

```text
Act as a Performance Expert. Define the Cache-Control headers for a static Next.js site.

### Requirement:
- Define headers for `/images` (1 year), `/api` (no-cache), and static HTML pages (stale-while-revalidate).

### Output Constraints:
- Technical tone.
```
