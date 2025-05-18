# Manual Test using Playwright MCP Server

Use MCP to execute this test.

Vite test server should allready be started. Ask user to confirm.

- Navigate to http://localhost:5176/vibe-starter/contact
- Fill out context form with some valid test data
- Press send message
- Assert success confirmation page: Should have title: Thank You, {{name}}!
- Create a Snapshot
- Generate a Playwright test for this scenario when all previous successfull
