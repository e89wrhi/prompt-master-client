# Examples: Intelligent Script Automation

## 1. Bulk Image Resizer (Python + Pillow)

```text
Act as an Automation Engineer. Create a Python script to resize all images in a folder.

### Context:
- **Task**: Resize JPG and PNG files to a max width of 1920px.
- **Features**: Maintain aspect ratio, handle subdirectories recursively, and provide a progress bar using `tqdm`.

### Requirements:
1. Provide CLI arguments for `--source`, `--target`, and `--quality`.
2. Include error handling for corrupt images.
3. Suggest a parallelization strategy using `concurrent.futures`.

### Output Constraints:
- Industrial-Grade tone.
- Include Automation Checklist.
```

## 2. Postgres Backup to S3 (Bash)

```text
Act as a Scripting Expert. Create a Bash script to dump a Postgres database and upload the gzipped result to an S3 bucket.

### Requirement:
- Use `pg_dump` and `aws s3 cp`.
- Automatically delete backups older than 7 days from the local folder.

### Output Constraints:
- Practical and Resilient tone.
```
