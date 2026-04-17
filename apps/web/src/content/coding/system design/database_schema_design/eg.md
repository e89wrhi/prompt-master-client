# Examples: Strategic DB Schema Design

## 1. Social Media Network (Complex Relations)

```text
Act as a Master Data Architect. Design a schema for a social network like Twitter.

### Context:
- **Entities**: Users, Tweets, Follows, Likes.
- **Goal**: High-speed retrieval of a user's feed from people they follow.

### Requirements:
1. Provide a Mermaid ERD.
2. Decide between SQL (for relations) vs NoSQL (for feed performance).
3. Suggest a partitioning strategy based on `user_id`.

### Output Constraints:
- Formal and Data-Driven tone.
- Performance Prediction included.
```

## 2. Global E-Commerce Product Catalog

```text
Act as a Senior Backend Engineer. Design a schema for a product catalog with 1M items and complex attributes (Size, Color, Voltage).

### Requirement:
- Use PostgreSQL with JSONB for flexible attributes.
- Design a GIN index for searching inside the attributes.

### Output Constraints:
- Scalable tone.
```
