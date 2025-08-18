---
title: Job Info
parent: Snippets
layout: post
---

# Job Info Logger(Pyjinn)

```python
job = __script__.vars.get("job")
job_id = job.jobId()
print(f"Job ID: {job_id}")
job_name = job.boundCommand().command()[0]
print(f"Job Name: {job_name}")
script_path = job.boundCommand().scriptPath()
print(f"Script path: {script_path}")
```