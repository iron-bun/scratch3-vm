/**
 * Icon svg to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len
const blockIconURI = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgIGlkPSJzdmc4IgogICB2ZXJzaW9uPSIxLjEiCiAgIHZpZXdCb3g9IjAgMCAyMTAgMjk3IgogICBoZWlnaHQ9IjE0Mi4xMTltbSIKICAgd2lkdGg9IjE0Mi4xMTltbSI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiPgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICB5Mj0iMTc5Ljc2ODc1IgogICAgICAgeDI9IjM1Ljk4ODM4NCIKICAgICAgIHkxPSIxNzkuNzY4NzUiCiAgICAgICB4MT0iLTEyLjEzMTQ4NiIKICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS44MzUyMDU0LDMuNzU0NjU1NikiCiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDU1MzAiCiAgICAgICB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQxMDA1IiAvPgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQxMDA1Ij4KICAgICAgPHN0b3AKICAgICAgICAgaWQ9InN0b3AxMDAxIgogICAgICAgICBvZmZzZXQ9IjAiCiAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiNmMGMwMDA7c3RvcC1vcGFjaXR5OjE7IiAvPgogICAgICA8c3RvcAogICAgICAgICBpZD0ic3RvcDEwMDMiCiAgICAgICAgIG9mZnNldD0iMSIKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6I2YwYzAwMDtzdG9wLW9wYWNpdHk6MDsiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKC00LjA3NDE1MzYsLTE3Ljk5MTc1MikiCiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIHkyPSIxOTEuNTUyNCIKICAgICAgIHgyPSI0NC45Njk5MjUiCiAgICAgICB5MT0iMTkxLjU1MjQiCiAgICAgICB4MT0iLTMuMTQ5OTQ4NiIKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDk3NiIKICAgICAgIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDk3NCIgLz4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50OTc0Ij4KICAgICAgPHN0b3AKICAgICAgICAgaWQ9InN0b3A5NzAiCiAgICAgICAgIG9mZnNldD0iMCIKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6I2Y5YzYwMDtzdG9wLW9wYWNpdHk6MTsiIC8+CiAgICAgIDxzdG9wCiAgICAgICAgIGlkPSJzdG9wOTcyIgogICAgICAgICBvZmZzZXQ9IjEiCiAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiNmOWM2MDA7c3RvcC1vcGFjaXR5OjA7IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPHBhdGgKICAgICBzdHlsZT0ib3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiM3ZmRkYzY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNDA1MjMxMjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO21hcmtlcjpub25lO3BhaW50LW9yZGVyOnN0cm9rZSBmaWxsIG1hcmtlcnMiCiAgICAgZD0iTSAyNTEuODYyNDEsMTQ4LjUgQSAxNDYuODYyNDEsMTQ2Ljg2MjQxIDAgMCAxIDEwNSwyOTUuMzYyNDEgMTQ2Ljg2MjQxLDE0Ni44NjI0MSAwIDAgMSAtNDEuODYyNDExLDE0OC41IDE0Ni44NjI0MSwxNDYuODYyNDEgMCAwIDEgMTA1LDEuNjM3NTg4NSAxNDYuODYyNDEsMTQ2Ljg2MjQxIDAgMCAxIDI1MS44NjI0MSwxNDguNSBaIgogICAgIGlkPSJwYXRoODcxIiAvPgogIDxnCiAgICAgaWQ9ImcxNDkxIgogICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMDU0OTA2OCwwLDAsMS4wNTQ5MDY4LC03LjY0MzcwNTYsLTQuNTk4ODMyOSkiPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuNTA2MDMzLDAsMCwxLjUwNjAzMywtNTMuMDY1MzYsLTc2Ljc5Mzc0OCkiCiAgICAgICBpZD0iZzE4OTktNSI+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMTc4NC0zLTIiCiAgICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KC0wLjk5OTgyODQyLDAuMDE4NTIzNjUsMC4wMTg1MjM2NSwwLjk5OTgyODQyLDIwNi42OTAzLC0zLjMyNTIwMTYpIj4KICAgICAgICA8ZwogICAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjE4MTI0OTc4LDAuOTI5NTU4NTcpIgogICAgICAgICAgIGlkPSJnMTgyNy00Ij4KICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgtMC4zNDc5NzE1LDAuMDA2NDQ2ODEsMC4wMDY0NDY4MSwwLjM0Nzk3MTUsMTk1LjIxMDA0LDUxLjQ4OTIxNikiCiAgICAgICAgICAgICBpZD0icGF0aDE2NTQtMi0wIgogICAgICAgICAgICAgZD0ibSAxMzUuNTg4NzQsMzcyLjA3Mzg2IGMgLTAuMzIxNzMsNDQuMTkwNzYgLTAuMTU2OTQsOTQuNzA0IC0wLjIzMTMyLDEzOC44OTQ4OSA0Ljc4NTc1LC0xLjAwNDY5IDE1LjI1NDY0LDMuNjkwMDQgMTIuOTkwMjQsLTQuMzg0NzcgLTAuMTcxNzIsLTkuMjY1MzcgLTAuMzQzOTIsLTE4LjUzMTUgLTAuNTE1NjMsLTI3Ljc5Njg3IGwgMzAuMTgzNTksLTEuNTY0NDUgdiAtMzAuMTAzNTIgaCAzMy41OTc2NiB2IDMxLjE3Nzc0IGwgMjcuNjYwMTYsMC43MzYyNiAtMC4zNTM1MiwzMy4xMzg3NCBjIDAsMCAxNS43MDk5NywyLjc1OTIxIDEyLjk3MDcsLTYuMzU5MzggLTAuMTM4MTQsLTQzLjgwNTI4IC0wLjkwNjQ2LC04Ny42MTQ0MSAtMC4yMzYzMiwtMTMxLjQxNzk3IC02LjA3MTA3LC0xLjA1MjY5IC0xNC41Njc4LDAuMTA3OTIgLTE0LjU2NzgsMC4xMDc5MiBsIDAuMzcyMTYsNDEuMTQ1NzMgLTkwLjk2MjUxLDAuMTkwNzIgMC41NDA4MiwtNDMuOTExMTcgYyAwLDAgLTguODQyMDMsLTEuODE1OTkgLTExLjQ0ODIzLDAuMTQ2MTMgeiBtIDc0LjUzNjI2LDUwLjIyNjkyIGMgLTAuMjE2NDIsNC4xODc1IDEuMzMwNzgsOS4wNDgxMiAwLjUzOTA2LDEwLjczODI4IGwgLTMxLjgwNDY4LDAuMDk1NyAtMC4zNzg5MSwtMTAuNDUzMTMgeiIKICAgICAgICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6IzViY2JmNTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4yMzU2MzMxM3B4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcKICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjY3NDgyMjcyLDAuNzE1MjI2NzEpIgogICAgICAgICAgIGlkPSJnMTgyMi05IiAvPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgc3R5bGU9Im9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojNWJjYmY1O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjQzMDAzODlweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgICAgZD0ibSAxNDUuODE4MDUsMTc2LjYyODc4IC0wLjA3OTgsMy4yNTI1OSAwLjM5MSwxNy4zMjUyNCAtMzAuMzAxODMsMC42ODM3NyAtMC4yNTEsLTE3LjMyNzE1IDAuMjUwMzIsMTcuMzI3MTYgLTAuMzgwMzYsLTE5LjQyODk0IC0wLjA3MDksLTEuMTQ1NjIgMS41NTAzOSwwLjAxNjIgMjYuMzE4MzcsLTAuNTgwNzMgeiIKICAgICAgICAgICBpZD0icGF0aDE1MjktOS0zLTMiIC8+CiAgICAgIDwvZz4KICAgICAgPGcKICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMC4yNzU5MzE5NikiCiAgICAgICAgIGlkPSJnMTYwNC0zMSI+CiAgICAgICAgPGcKICAgICAgICAgICBpZD0iZzE1ODAtMTAiCiAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwLjM5Njg3NTAzKSIgLz4KICAgICAgPC9nPgogICAgICA8ZwogICAgICAgICBpZD0iZzE4NjMtOSI+CiAgICAgICAgPGcKICAgICAgICAgICBpZD0iZzE3ODQtNiI+CiAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgaWQ9InBhdGgxNjU0LTI2IgogICAgICAgICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4zNDgwMzEyMSwwLDAsMC4zNDgwMzEyMSwxMi42NjU5NTYsNTIuNjk3MjI0KSIKICAgICAgICAgICAgIGQ9Im0gMzgyLjYxMTYyLDM3My4zNDE4MiAwLjA2OTQsNDIuOTkyNDIgLTkwLjUxODIyLDAuMDgyMiBjIDAsMCAwLjYyNzA5LC0zNC41NTEwOSAwLjQ3MTI4LC00MC43NjAyMiAtNC44MTA2NCwtOS44ZS00IC03Ljk5NzY3LDAuMDQwOCAtMTIuODA1OTIsLTAuMTM0NzcgMS41NjU5Myw0NS44NTQ3NCAxLjI1MDU1LDEzNy42MTUyNCAxLjI1MDU1LDEzNy42MTUyNCBsIDExLjY4Mzg2LC0wLjI4NjIgMC4xNjQ2MywtMzEuMDU3MjQgMzAuMTUwOTYsLTEuMTkwNTcgdiAtMzIuODYwNTIgbCAzMy41OTc2NiwxLjYwOTQgMS42MDk0LDMzLjQ3Njg2IDI2LjQzMTY0LDEuMTQ1MzEgLTAuNjg5NzUsMjguNjkwMzMgMTEuMTUzNTUsLTAuMTU2OSAtMC43Mzg0LC0xMzkuNTUxNTUgeiBtIC0yNy40MjQxMiw0OS41ODAwNiAwLjU3MDMxLDkuNjkzMzUgYyAtMTEuMTAxODgsMS45Nzc2MSAtMjEuNDgyMjksMS4xMDc0MSAtMzEuODM1OTMsMS4xNDA2MyBsIC0wLjM3ODkxLC0xMC40NTMxMyB6IgogICAgICAgICAgICAgc3R5bGU9Im9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojNWJjYmY1O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjIzNTYzMzEzcHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAvPgogICAgICAgIDwvZz4KICAgICAgICA8ZwogICAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLjQ1MzUyNCwwLjE4NzA4ODk2KSIKICAgICAgICAgICBpZD0iZzE2MDQtMy02Ij4KICAgICAgICAgIDxnCiAgICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDAuMzk2ODc1MDMpIgogICAgICAgICAgICAgaWQ9ImcxNTgwLTEtOSI+CiAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6IzViY2JmNTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4yMzU2MzMxM3B4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgICAgICAgZD0ibSAyOTMuNzY1NjIsMzU1LjYyODkxIDAuNDAyMzUsOS4zMzk4NCAtMC4yMDExNyw0OS43OTI5NyA4Ny4wODc4OSwwLjM1MTU2IC0wLjIwMTE3LC00OS43OTEwMSAwLjIwMzEyLDQ5Ljc5MTAxIDAuMDU4NiwtNTUuODM1OTQgMC4xNDI1OCwtMy4yOTQ5MiAtNC40NTMxMiwwLjEyODkxIC03NS42Mzg2NywtMC4yNjc1OCB6IgogICAgICAgICAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjM0ODAzMTIxLDAsMCwwLjM0ODAzMTIxLC0zNy43ODc1NjgsNTIuMTEzMjYpIgogICAgICAgICAgICAgICBpZD0icGF0aDE1MjktOS0zIiAvPgogICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgICAgICA8ZwogICAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLjg5NDA5NSw0NS4zMDk1NjUpIgogICAgICAgICAgIGlkPSJnMTYwNC0zLTYtNiI+CiAgICAgICAgICA8ZwogICAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwLjM5Njg3NTAzKSIKICAgICAgICAgICAgIGlkPSJnMTU4MC0xLTktNyI+CiAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6IzViY2JmNTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4yMzU2MzMxM3B4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgICAgICAgZD0ibSAyOTMuNzY1NjIsMzU1LjYyODkxIDAuNDAyMzUsOS4zMzk4NCAtMC4yMDExNyw0OS43OTI5NyA4Ny4wODc4OSwwLjM1MTU2IC0wLjIwMTE3LC00OS43OTEwMSAwLjIwMzEyLDQ5Ljc5MTAxIDAuMDU4NiwtNTUuODM1OTQgMC4xNDI1OCwtMy4yOTQ5MiAtNC40NTMxMiwwLjEyODkxIC03NS42Mzg2NywtMC4yNjc1OCB6IgogICAgICAgICAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjM0ODAzMTIxLDAsMCwwLjM0ODAzMTIxLC0zNy43ODc1NjgsNTIuMTEzMjYpIgogICAgICAgICAgICAgICBpZD0icGF0aDE1MjktOS0zLTUiIC8+CiAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICAgIDxnCiAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMzQzMjg4MzcsNDQuMTg5MzI2KSIKICAgICAgICAgaWQ9ImcxNjA0LTMtNi02LTMiPgogICAgICAgIDxnCiAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwLjM5Njg3NTAzKSIKICAgICAgICAgICBpZD0iZzE1ODAtMS05LTctNSI+CiAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgc3R5bGU9Im9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojNWJjYmY1O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjIzNTYzMzEzcHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICAgICAgZD0ibSAyOTMuNzY1NjIsMzU1LjYyODkxIDAuNDAyMzUsOS4zMzk4NCAtMC4yMDExNyw0OS43OTI5NyA4Ny4wODc4OSwwLjM1MTU2IC0wLjIwMTE3LC00OS43OTEwMSAwLjIwMzEyLDQ5Ljc5MTAxIDAuMDU4NiwtNTUuODM1OTQgMC4xNDI1OCwtMy4yOTQ5MiAtNC40NTMxMiwwLjEyODkxIC03NS42Mzg2NywtMC4yNjc1OCB6IgogICAgICAgICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4zNDgwMzEyMSwwLDAsMC4zNDgwMzEyMSwtMzcuNzg3NTY4LDUyLjExMzI2KSIKICAgICAgICAgICAgIGlkPSJwYXRoMTUyOS05LTMtNS02IiAvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcKICAgICAgIGlkPSJnMTMxOS04IgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS40ODQwNjMsLTAuMjU2MzA1MDMsMC4yNTYzMDUwMywxLjQ4NDA2MywtOTYuODY4NDU4LC01OC4xNjYzMjUpIj4KICAgICAgPHBhdGgKICAgICAgICAgaWQ9InBhdGgxMzA3LTIiCiAgICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMzQyOTU0MTUsMC4wNTkyMjk4OCwtMC4wNTkyMjk4OCwwLjM0Mjk1NDE1LDM0LjI3ODYyLDQ2Ljg0NTgpIgogICAgICAgICBkPSJtIDg0Ljk0NTMxMiwyODUuNTA1ODYgYyAwLDAgLTcuMjA4NTUyLDAuNDg4NjcgLTkuMTUyMzQzLDEyLjMzMzk4IC03LjUzMjE4Myw0NS45MDA1MSAtMzYuNTYyNSwxNTQuMDgwMDggLTM2LjU2MjUsMTU0LjA4MDA4IGwgLTExLjk5MjE4OCwtMC45Mjk2OSAtMTcuOTM3NDk5OCwxMi45NjY4IC02LjAxOTUzMTIsMjMuMjE4NzUgMTYuMjYxNzE5LDIzLjgwODYgMS45Mzc1LDAuMDUwOCAxMS4yMTY3OTcsNS4xOTkyMiAyLjE0ODQzNywtOS4zMzk4NSAtMTAuNzQyMTg3LC02LjkxOTkyIC05Ljg2OTE0MSwtMTUuMjY3NTggMy44MTI1LC0xNS44OTY0OCAxMS4zNzMwNDcsLTcuODQ1NzEgMzEuNDg2MzI4LDMuNjI2OTYgNy4xMTMyODEsOC44MDA3OCAtMy4zMjIyNjUsMTcuMDYyNSAtMTYuMDY4MzYsMTEuOTM3NSAtMS44MjAzMTIsMTEuNzkxMDEgMS41MzMyMDMsMC41MDU4NiAyNi4wMjUzOTEsLTE5LjA1NjY0IDQuNjczODI4LC0yMy43NTc4MSAtMTIuNDYwOTM4LC0xNy40MjU3OCAzMS41MTc1NzgsLTEwNi40NTcwMyA2LjgyMDMxNCwwLjc5ODgzIDE2LjkzMzU5LC00LjIxODc1IC01Ljc3NzM0LC0zNS40MTYwMiAtNC42MjMwNSwwLjg2NTIzIC00LjcwNTA4LC0yNC40ODQzNyAtMTQuOTA4MTk5LDEuNjIzMDUgeiIKICAgICAgICAgc3R5bGU9Im9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojZmZkNDJhO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjQzNjY1Mjc4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgICAgPHBhdGgKICAgICAgICAgaWQ9InBhdGgxMzA5LTkiCiAgICAgICAgIGQ9Im0gMTYuMjA1NzI5LDIyMi43NTEzIC0yLjQxNDMyMywtNS4yNzUxMyAyLjQxNDMyMywtNS41MjMxOCA0LjA4NDUwNSwtMi4wODM1OSA4LjgxMzkzMiwyLjUzMDA4IC0xLjQ1NTIwOCwtMi42MTI3NiAtMTAuNTgzMzMzLC0zLjEwODg2IC00LjM2NTYyNSwyLjAxNzQ1IC0yLjI0ODk1OCw1LjIyNTUyIDIuNDgwNDY4LDUuODIwODQgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2FhODgwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzMnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoMTMxMS05IgogICAgICAgICBkPSJtIDIwLjM3MjkxNiwyMjYuMjIzOTYgMy44MTk5MjIsMi40NjM5MyA4LjgxMzkzMiwtNC44NDUxOCAyLjc0NTA1MiwtNy4xMjcyMiAtMy4yMjQ2MDksLTYuMzUgLTAuODU5ODk2LC0wLjc3NzIxIDEuNzY5NDAxLDMuNzcwMzEgLTMuMDA5NjM1LDcuODcxMzYgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2FhODgwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzMnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgICA8L2c+CiAgICA8ZwogICAgICAgaWQ9ImcxMzE5LTYtNyIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KC0xLjQ5NDk1LC0wLjE4MjM3MzEzLC0wLjE4MjM3MzEzLDEuNDk0OTUsMjk0LjcwMjk2LC02NS4yMjg2OTMpIj4KICAgICAgPHBhdGgKICAgICAgICAgaWQ9InBhdGgxMzA3LTAtNjEiCiAgICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KC0wLjM0NTQ3MDAxLC0wLjA0MjE0NDg1LC0wLjA0MjE0NDg1LDAuMzQ1NDcwMDEsMjExLjE5MzI1LDcxLjExNTg3NSkiCiAgICAgICAgIGQ9Im0gNDQyLjM1NTQ3LDI4MS43MDExNyAtNi44MDA3OCwxLjk5NjEgLTE0Ljk3MDcxLC0wLjg4MjgyIC0zLjQ4NjMyLDI0LjY4OTQ2IC00LjY2MDE2LC0wLjYzNjcyIC00LjAxMTcyLDM1LjY1ODIgMTcuMTIxMSwzLjM3NSA2Ljc3MTQ4LC0xLjEzNjcyIDM2Ljc1OTc2LDEwNC43NjM2NyAtMTEuNTgwMDcsMTguMDIxNDkgNS44NDU3LDIzLjQ5NjA5IDI2LjkzNzUsMTcuNzQyMTkgMS41MDc4MSwtMC41ODIwMyAtMi40MDQyOSwtMTEuNjg1NTUgLTE2LjY0MDYzLC0xMS4xMjMwNSAtNC4xNjQwNiwtMTYuODc4OSA2LjY2Nzk3LC05LjE0MjU4IDMxLjI2NzU3LC01LjE4NTU1IDExLjc1LDcuMjczNDQgNC41OTU3MSwxNS42ODc1IC05LjA5OTYxLDE1LjczODI4IC0xMC4zODY3Miw3LjQ0NTMxIDIuNjA5MzgsOS4yMjA3MSAxMC45NDMzNSwtNS43NSAxLjkzMzYsLTAuMTQ2NDkgMTUuMDYwNTUsLTI0LjU4Mzk4IC03LjE2MjExLC0yMi44OTI1OCAtMTguNTYwNTUsLTEyLjA2MDU1IC0xMS45Mjk2OSwxLjUyMzQ0IGMgMCwwIC0zNC4zNjAzNywtMTA2LjYwNzc1IC00NC4xNjAxNSwtMTUyLjA3ODEyIC0yLjUyODk5LC0xMS43MzQzMiAtOS43NTM5MSwtMTEuODY1MjQgLTkuNzUzOTEsLTExLjg2NTI0IHoiCiAgICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZDQyYTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS40MzY2NTI3ODtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoMTMwOS02LTMiCiAgICAgICAgIGQ9Im0gMTYuMjA1NzI5LDIyMi43NTEzIC0yLjQxNDMyMywtNS4yNzUxMyAyLjQxNDMyMywtNS41MjMxOCA0LjA4NDUwNSwtMi4wODM1OSA4LjgxMzkzMiwyLjUzMDA4IC0xLjQ1NTIwOCwtMi42MTI3NiAtMTAuNTgzMzMzLC0zLjEwODg2IC00LjM2NTYyNSwyLjAxNzQ1IC0yLjI0ODk1OCw1LjIyNTUyIDIuNDgwNDY4LDUuODIwODQgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2FhODgwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzMnB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoMTMxMS0yLTIiCiAgICAgICAgIGQ9Im0gMjAuMzcyOTE2LDIyNi4yMjM5NiAzLjgxOTkyMiwyLjQ2MzkzIDguODEzOTMyLC00Ljg0NTE4IDIuNzQ1MDUyLC03LjEyNzIyIC0zLjIyNDYwOSwtNi4zNSAtMC44NTk4OTYsLTAuNzc3MjEgMS43Njk0MDEsMy43NzAzMSAtMy4wMDk2MzUsNy44NzEzNiB6IgogICAgICAgICBzdHlsZT0iZmlsbDojYWE4ODAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjI2NDU4MzMycHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgIDwvZz4KICAgIDxnCiAgICAgICBpZD0iZzEzMDUtOSIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuNTA2MDMzLDAsMCwxLjUwNjAzMywtNTMuMDY1MzYsLTc1LjIxNTk4NSkiPgogICAgICA8ZwogICAgICAgICBpZD0iZzEyNjAtOSI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICBpZD0icGF0aDEyNTQtMSIKICAgICAgICAgICBkPSJtIDE1OC4xNjAwOCwxMTQuMzA3OTEgYyA0LjU2NDA2LC0xLjM4NTE2IDQuNTU0NTMsNC45NDkwMiA0LjU0NTEyLDcuOTA2OTcgMC40NjIwMiw3Ljk5ODEyIDAuMDM1MSwxNi4wNzI4MSAtMS4wMDc0NiwyMy45OTE5NCAtMi4yODYwOSw1LjE3MDggLTYuMDQwOCwtMC40MDc3MiAtNC4yNDQwOCwtMy44NTM1NiAwLjE0OTY5LC05LjMzNTA0IDAuNDg2NSwtMTguNjk4MzEgMC43MDY0MiwtMjguMDQ1MzUgeiIKICAgICAgICAgICBzdHlsZT0ib3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmQ0MmE7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNDk5ODY4NDU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAvPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgaWQ9InBhdGgxMjU2LTQiCiAgICAgICAgICAgZD0ibSAxNTQuNDUwNTIsMTc1LjIwODc4IGMgMi42MDk2NCwyLjU4MDEgNi41NTQ4OCwwLjI1MjkxIDYuMzE4NzgsLTMuMTc0OTggMS4yMzE4NCwtNi4wODIxOSAxLjMzMzgyLC0xMi4zMzUwMSAxLjE5NTE5LC0xOC41MjM1NSAwLjUzODkyLC0zLjIwMDE5IC0xLjk1OTg5LC04LjQxMTM1IC01LjQ2MjU4LC00Ljk5MDQyIC0wLjk5MzQ4LDMuOTU5NTkgLTAuMzQ4ODYsOC41ODY5NSAtMS4wOTYxOCwxMi44MTQyNyAtMC4yNjUwNCw0LjYyNzk3IC0wLjY0NDE2LDkuMjQ5NDIgLTAuOTU1MjEsMTMuODc0NjggeiIKICAgICAgICAgICBzdHlsZT0ib3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmQ0MmE7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgICAgIDwvZz4KICAgICAgPGcKICAgICAgICAgaWQ9ImcxMjYwLTAtOSIKICAgICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoLTEsMCwwLDEsMjEwLjExMzk1LDAuMTI2OTMyMDEpIj4KICAgICAgICA8cGF0aAogICAgICAgICAgIGlkPSJwYXRoMTI1NC05LTEiCiAgICAgICAgICAgZD0ibSAxNTguMTYwMDgsMTE0LjMwNzkxIGMgNi4yNzY0NiwtMC4yNTE5MSA0LjExNzEsOC4xNDE4OSA0LjcwOTA1LDEyLjIwMDk2IDAuMTI1NDQsNi41ODM3IC0wLjMxMjk1LDEzLjE3MTUxIC0xLjE3MTM4LDE5LjY5Nzk1IC0zLjM0NTk0LDUuNDk0MjYgLTYuMjMyODcsLTMuNTM3MjMgLTQuMTk4MzIsLTYuNDI3MjIgMC4xNjUwNywtOC40OTE5MyAwLjQ2MDkyLC0xNi45ODA2IDAuNjYwNjUsLTI1LjQ3MTY5IHoiCiAgICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZDQyYTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICBpZD0icGF0aDEyNTYtMy0wIgogICAgICAgICAgIGQ9Im0gMTU0LjI0MDA1LDE3NS40MTkyNiBjIDEuNTI3NTEsMS40ODIyNCA0LjExMTIyLDEuMDY2ODQgNS40MDgyMywtMC41MDkzMSAxLjMxOTI1LC0xLjM3Njc5IDEuOTY2NDIsLTMuMzg1NTEgMS42NDE3OSwtNS4yNzA2MSAwLjYxNDIxLC02LjcyNjUzIDEuMTg3MTksLTEzLjUzMjk3IDAuMjcyNjEsLTIwLjI2MDU3IC0wLjgwMzk5LC0xLjgxOTAzIC0zLjQyOTcxLC0yLjE5MzAzIC00Ljc2MzMxLC0wLjczNjQ1IC0xLjkzNzc0LDEuNjgyNDkgLTAuNTAxNzcsNC4xODQ0OCAtMC45Nzg1NCw2LjMwODc5IC0wLjM4NDk3LDYuODMzMjUgLTEuMTM1MiwxMy42MzkyNSAtMS41ODA3OCwyMC40NjgxNSB6IgogICAgICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZDQyYTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgICAgPC9nPgogICAgICA8cGF0aAogICAgICAgICBpZD0icmVjdDEyMzYtNyIKICAgICAgICAgZD0ibSAxMDQuNDc1NzMsMTAzLjY4MDQ5IGMgMTguMjkyNzQsMC4wMjQ0IDU0Ljg4MjgsLTMuMzI4MzQgNTQuNDYxODUsNy42MzEyMyAtMC40MjA5NSwxMC45NTk1NiAtMS41MDU1Myw1OS40NDU2NiAtMS41ODkzNyw2MS4yNzY2OCAtMC4wODM4LDEuODMxMDIgLTAuMDQyOSwzLjM2NTE5IC0xLjczNjQsMy40OTAzNiAtMS42OTM0NiwwLjEyNTE3IC05NS43NDIzMDcsMC4wMTQ1IC05OS4zMTM5NzksMC4yMzI0OCAtMy41NzE2NzIsMC4yMTgwMiAtMy43MDQxODQsLTEuOTkzMzQgLTMuODUyNzc5LC0zLjM4OTc2IC0wLjE0ODU5NSwtMS4zOTY0MiAtMC43OTU2MzgsLTU1Ljg5Mjk0IC0wLjYwOTQxNSwtNjMuMDc1MzQgMC4yMTkwNDksLTguNDQ4NDYgMzQuMzQ3MzU5LC02LjE5MDA1IDUyLjY0MDA5MywtNi4xNjU2NSB6IgogICAgICAgICBzdHlsZT0ib3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiM1YmNiZjU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNDMwMDM4OXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgICAgPHBhdGgKICAgICAgICAgaWQ9InBhdGgxMTc2LTUiCiAgICAgICAgIGQ9Im0gMTA0Ljc5MTU0LDE1MC4yMDU4NiA2Ljc4NDgsMy45MTcyMSB2IDcuNDI2OCBsIC02LjcwMDc0LDMuODY4NjggLTYuNTg5OTg2LC0zLjgwNDczIHYgLTcuNzUzNCB6IgogICAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgIDwvZz4KICAgIDxnCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjUwMzA3MDYsMCwwLDEuNTAzMDcwNiwtNTIuOTE3NzY3LC03NC4zMTExODQpIgogICAgICAgaWQ9ImcxMjUyIj4KICAgICAgPGcKICAgICAgICAgaWQ9ImcxMTExIgogICAgICAgICBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW9wYWNpdHk6MSI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICBpZD0icGF0aDEwNjMtMiIKICAgICAgICAgICBkPSJtIDgxLjg3ODIwNiwxMDQuMDY1NTQgYyAtNS45NTgxNiwtMC4wMTIyIC0xMS44NDY3NCwyLjQ4NTk5IC0xNi4wMjY0MTMsNi43MjM2MiAtMi4yMDE2NTEsLTEuOTY5OTIgLTQuMzE3OTA3LC00LjA1MTE0IC02LjY2NzgwOSwtNS44NDQ2MSAtMS43NzQ2MzcsLTAuMTMyNjkgLTUuMTY4NzU3LDEuODUyMzkgLTIuMjYwNzQ2LDIuOTg0MDMgMi4zODMyNzIsMS42NzczOCA0LjU2MTAxNywzLjY2ODg4IDYuMjY0NjM1LDYuMDQ0MzYgLTYuMTQxMjU3LDguNTIzNzggLTUuNzY0NTI3LDIwLjk5NzQ3IDAuODM1MDYyLDI5LjE1MzYgNS4xODk1NTEsNi43MzU1NCAxNC4zMTQ3MjUsMTAuMTg1MjEgMjIuNjM5ODQyLDguMjY4OTQgOS4zNTYwNjcsLTEuOTA3NDYgMTYuNzM5MTgzLC0xMC4yMDk2MiAxOC4wODA5ODMsLTE5LjU4MzI1IDEuNjA1NDUsLTkuNjAzMiAtMy4wODEyNSwtMjAuMDA0MTMgLTExLjY1ODIwOSwtMjQuNzcyMTggLTMuMzkxNjQzLC0xLjk0NzI3IC03LjI5NDYxLC0yLjk5NDEzIC0xMS4yMDczNDUsLTIuOTc0NTEgeiIKICAgICAgICAgICBzdHlsZT0ib3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICBpZD0icGF0aDEwNjMtMyIKICAgICAgICAgICBkPSJtIDU1LjUxMjQ4LDEwNi44NDI5MSBjIC0wLjg1OTc5NywtMC42NzUyMyAtMi45MjEyMTcsLTIuMzQ1MDcgLTMuNTk4OTY0LC0zLjEzNjgzIDAuNzQxNDEsLTAuNTA3OTggMjMuMTU4MjU0LC0xMC4zOTk0MjcgMzAuMjM0ODcyLC0xNC4zMzcxNyAwLjczMjg0OSwwLjYzNDIzIDEuNDU3OTYyLDEuOTY1MjEgMi4wNjQ3MzUsMy4yNjU4NjcgLTYuMTA3MDMsMy45MTM0MTcgLTI1LjY2ODk3NywxMi4wMjI2OTMgLTI1LjAyODg5NywxMi4zMDk5NDMgLTIuMzYyNjM2LDEuMjE5NDEgLTEuNTUyNjczLDAuNjgwMjIgLTMuNjcxNzQ2LDEuODk4MTkgeiIKICAgICAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjI2NDU4MzMycHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgICAgICA8ZwogICAgICAgICAgIGlkPSJnMTE3NCIKICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wOTM0Nzc1LC0wLjI1NjUpIgogICAgICAgICAgIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utb3BhY2l0eToxIj4KICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICBpZD0icGF0aDEwNDYtNy02LTYiCiAgICAgICAgICAgICBkPSJtIDg5LjUyNzI2MSwxMTkuMjk5MjIgYSA1LjMyMzYxNCw1LjMyMzYxNCAwIDAgMSAtNS4zMjM2MSw1LjMyMzYxIDUuMzIzNjE0LDUuMzIzNjE0IDAgMCAxIC01LjMyMzYyLC01LjMyMzYxIDUuMzIzNjE0LDUuMzIzNjE0IDAgMCAxIDUuMzIzNjIsLTUuMzIzNjIgNS4zMjM2MTQsNS4zMjM2MTQgMCAwIDEgNS4zMjM2MSw1LjMyMzYyIHoiCiAgICAgICAgICAgICBzdHlsZT0ib3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMTU5NzAwM3B4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgICAgICA8L2c+CiAgICAgIDwvZz4KICAgICAgPGcKICAgICAgICAgdHJhbnNmb3JtPSJyb3RhdGUoOS42NzkyNzY3LDEyNy41OTU3NSwxMzEuMTA2MDcpIgogICAgICAgICBpZD0iZzExMDYiCiAgICAgICAgIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utb3BhY2l0eToxIj4KICAgICAgICA8cGF0aAogICAgICAgICAgIGlkPSJwYXRoMTAxMi0zIgogICAgICAgICAgIGQ9Im0gMTQ0LjQ0MTMxLDk5LjczNDAxNyBjIC0xLjkwMDgxLDIuMjkyODYzIC0zLjUwOTQ5LDQuODEzNDkzIC01LjIyNTUyLDcuMjQ1NTUzIC03Ljg5NTAzLC00LjYyNzc2IC0xOC41MjU4NywtMy42MTM0OCAtMjUuNDczNTIsMi4zMDY4MiAtNy40MDA1MSw1Ljk5OTgzIC0xMC40NzIzOSwxNi41NjY3NiAtNy43MDUyNSwyNS42NDU4NSAyLjQ5NzI1LDguOTk1MDMgMTAuNzU2MzYsMTYuMTYxOTIgMjAuMTMzNTQsMTYuODg1OSA4LjU1MjAzLDAuODU4MDIgMTcuMjE2MzIsLTMuNzM4ODkgMjEuNTYxNjEsLTExLjEwNDUgNS40NTUwNiwtOC43Mjk0NCA0LjUxNzU2LC0yMC44NzY3IC0yLjI5MTEyLC0yOC42MTUzNCAtMS4wNDA5OSwtMS41ODUxMiAtMy45MzIyOSwtMi41NTA0IC0yLjA0Mjg3LC00LjYyMDk4IDEuMDg2MzMsLTIuNjk2NzggMy4zODA0NCwtNC41NzI0MSA0Ljk3MDAxLC02LjkyNjM0IC0xLjIyNDM2LC0wLjUxMjcxIC0yLjY4NzEyLC0wLjIyNTIxIC0zLjkyNjg4LC0wLjgxNjk2MyB6IgogICAgICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgICAgICA8cGF0aAogICAgICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7dmVjdG9yLWVmZmVjdDpub25lO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4xNTk3MDAzcHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICAgIGQ9Im0gMTMyLjI1NTYyLDExOS4wNDI3MiBhIDUuMzIzNjE0MSw1LjMyMzYxNDEgMCAwIDEgLTUuMzIzNjEsNS4zMjM2MSA1LjMyMzYxNDEsNS4zMjM2MTQxIDAgMCAxIC01LjMyMzYyLC01LjMyMzYxIDUuMzIzNjE0MSw1LjMyMzYxNDEgMCAwIDEgNS4zMjM2MiwtNS4zMjM2MiA1LjMyMzYxNDEsNS4zMjM2MTQxIDAgMCAxIDUuMzIzNjEsNS4zMjM2MiB6IgogICAgICAgICAgIGlkPSJwYXRoMTA0Ni03LTUiIC8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICBpZD0icGF0aDEwNjMtNS02IgogICAgICAgICAgIGQ9Im0gMTQ4LjM2ODM4LDEwMC41NTA4MSBjIDEuODQ4NTYsLTEuNzM0MjU4IDIuMzA3NzMsLTMuMjYyNDQ1IDIuMzA3NzMsLTMuMjYyNDQ1IC0yLjA1MjI0LC0wLjY4NjYyOSAtMTkuMDUxODYsLTUuMjM3MzQ3IC0zMC4yOTg5OCwtOC44NTA3ODYgLTAuNzYwNDksMC41OTg2NTQgLTEuNTgzNzgsMy4xOTk5NTkgLTEuODg0MTUsMy44NjY3MzEgOC4wNDYzLDMuODAxMTM1IDI1Ljg4NTg0LDcuODQyNzggMjkuODc1NCw4LjI0NjUgeiIKICAgICAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjI2NDU4MzMycHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==';


const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');
const nets = require('nets');
const languageNames = require('scratch-translate-extension-languages');
const formatMessage = require('format-message');
const Marty = require('./marty');

/**
 * The url of the translate server.
 * @type {string}
 */
const serverURL = 'https://translate-service.scratch.mit.edu/';

/**
 * How long to wait in ms before timing out requests to translate server.
 * @type {int}
 */
const serverTimeoutMs = 10000; // 10 seconds (chosen arbitrarily).




// ----------------------------
// local IP discovery tool from net.ipcalf.com

var localIp = null;

// NOTE: window.RTCPeerConnection is "not a constructor" in FF22/23
/*window.RTCPeerConnection ||*/ 
var RTCPeerConnection = window.webkitRTCPeerConnection || window.mozRTCPeerConnection;

if (RTCPeerConnection) (function () {

    var rtc = new RTCPeerConnection({iceServers:[]});

    try {
        if (1 || window.mozRTCPeerConnection) {
            rtc.createDataChannel('', {reliable:false});
        };
    } catch(err) {
        console.log(err.message);
    }
    
    rtc.onicecandidate = function (evt) {
        if (evt.candidate) grepSDP("a="+evt.candidate.candidate);
    };

    rtc.createOffer(function (offerDesc) {
        grepSDP(offerDesc.sdp);
        rtc.setLocalDescription(offerDesc);
    }, function (e) { console.warn("offer failed", e); });
    
    function grepSDP(sdp) {
        var hosts = [];
        sdp.split('\r\n').forEach(function (line) {
            if (~line.indexOf("a=candidate")) {
                var parts = line.split(' '),
                    addr = parts[4],
                    type = parts[7];
                if (type === 'host' && addr != "0.0.0.0" && addr.length < 16){
                    localIp = addr;
                }
            } else if (~line.indexOf("c=")) {
                var parts = line.split(' '),
                    addr = parts[2];
                if (addr != "0.0.0.0" && addr.length < 16){ localIp = addr;}
            }
        });
    }
})();

// end of local IP discovery
// ----------------------------




class MartyPeripheral {

    constructor (runtime, extensionId) {

        /**
         * The Scratch 3.0 runtime used to trigger the green flag button.
         * @type {Runtime}
         * @private
         */
        this._runtime = runtime;

        
        /**
         * The Bluetooth socket connection for reading/writing peripheral data.
         * @type {object}
         * @private
         */
        this.marty = null;
        this._runtime.registerPeripheralExtension(extensionId, this);

        this._availablePeripherals = [];

        this._scanTimeout = 20000;
        this._onScanTimeout = null;

        /**
         * Local IP/Subnet state variables
         * @type {str}
         * @private
         */
        this._localIp = localIp;
        console.log('Local IP for Marty Peripheral is ' + this._localIp);
        this.RTCPeerConnection = window.webkitRTCPeerConnection ||
                                 window.mozRTCPeerConnection;


        /**
         * Bind members to this
         */
        
        this._pushPeripheralList = this._pushPeripheralList.bind(this);
        this._sendDiscoverTimeout = this._sendDiscoverTimeout.bind(this);
        this._sendError = this._sendError.bind(this);
        this._scanForMartys = this._scanForMartys.bind(this);
    }


    /**
     * Called by the runtime when user wants to scan for a peripheral.
     */
    scan () {
        console.log("Scanning for Martys...");

        // Clear array and start a new scan:
        this._availablePeripherals = [];

        // if there is an
        if (~this._onScanTimeout){
            this._scanRange('192.168.0'); // TODO use localIp
            this._onScanTimeout = window.setTimeout(this._sendDiscoverTimeout, this._scanTimeout);
        }
    }


    _sendRequest (requestIp) {
        fetch("http://" + requestIp + "/service-discovery")
            .then(res => res.text())
            .then(
                (text) => {
                    console.log("Response from " + requestIp + ".....");
                    var magic_signature = text.substring(0, 2); // [0, 1]
                    var marty_name = text.substring(2);     // [2, ...]

                    if (magic_signature == "AA") {
                        console.log("Found a Marty called " + marty_name + "!");
                        this._availablePeripherals.push({
                            name: marty_name,
                            rssi: -10, // TODO: Better RSSI representation? (dB)
                            peripheralId: requestIp
                        });
                        this._pushPeripheralList();
                        if (this._onScanTimeout){
                            window.clearTimeout(this._onScanTimeout);
                        }
                    } else {
                        // TODO: else?
                    }
                },
                (error) => {
                    console.debug(error);
                },
                e => {
                    console.debug(e);
                }
            )
            .catch(
                e => {
                    console.debug(e);
                }
            );
    }

    _scanRange (ip) {
        for (var i = 1; i < 255; i++) {
            this._sendRequest(ip + "." + i);
        }             
    }

    _scanForMartys (ip) {
        if (ip === undefined){ 
            if (this._localIp != null){
                var ip_parts = this._localIp.split(".");
                ip_parts.pop();
                ip = ip_parts.join(".");
                console.log("gonna scan: " + ip);
            } else {
                ip = "192.168.0";
            }
        }
        console.log("scanning: " + ip);
        scanRange(ip, martylist, 15000); // TODO martylist doesn't exist
        //checkTimeout = setTimeout(checkResults, 1000, ip);
        //setTimeout(checkMartys, 16000, ip);
    }


    /**
     * Called by the runtime when user wants to connect to a certain peripheral.
     * @param {number} id - the id of the peripheral to connect to.
     */
    connect (id) {
        console.log("Connecting to Marty "+ id);
        this._runtime.emit(this._runtime.constructor.PERIPHERAL_CONNECTED);
        this.marty = new Marty(id, 'Marty the Robot'); // TODO get real name
    }


    /**
     * Disconnect from Marty.
     */
    disconnect () {
        console.warn("Marty scratch blocks Disconnect hit");
        this.marty = null;
    }


    /**
     * Return true if connected to the micro:bit.
     * @return {boolean} - whether the micro:bit is connected.
     */
    isConnected () {
        let connected = false;
        if (this.marty) {
            connected = true;
            //connected = thismarty.isConnected(); // TODO isConnected deosn't exist in Marty
        }
        return connected;
    }

    _addPeripheralToList (periph) {
        this._availablePeripherals[periph.id] = periph;
        this._pushPeripheralList()
    }

    _pushPeripheralList () {
        this._runtime.emit(
            this._runtime.constructor.PERIPHERAL_LIST_UPDATE,
            this._availablePeripherals
        ); 
    }
    
    _sendDiscoverTimeout () {
        this._runtime.emit(this._runtime.constructor.PERIPHERAL_SCAN_TIMEOUT);
    }

    /**
     * Shows connection debug info, but not very useful for us as
     * it is BlueTooth specific
     */
    _sendError () {
        this.disconnect();
        this._runtime.emit(this._runtime.constructor.PERIPHERAL_ERROR);
    }

}

/**
 * Class for the translate block in Scratch 3.0.
 * @constructor
 */
class Scratch3MartyBlocks {

    
    /**
     * The ID of the extension.
     * @return {string} the id
     */
    static get EXTENSION_ID () {
        return 'marty';
    }

    
    constructor (runtime) {

        /**
         * The Scratch 3.0 runtime used to trigger the green flag button.
         * @type {Runtime}
         * @private
         */
        this._runtime = runtime;

        
        /**
         * Holder for Marty Peripheral Manager instance
         * @type {object}
         * @private
         */
        this._peripheral = new MartyPeripheral(this._runtime, Scratch3MartyBlocks.EXTENSION_ID);

        /**
         * Language code of the viewer, based on their locale.
         * @type {string}
         * @private
         */
        this._viewerLanguageCode = this.getViewerLanguageCode();

        /**
         * List of supported language name and language code pairs, for use in the block menu.
         * @type {Array.<object.<string, string>>}
         * @private
         */
        this._supportedLanguages = languageNames.menuMap[this._viewerLanguageCode].map(entry => {
            const obj = {text: entry.name, value: entry.code};
            return obj;
        });

        /**
         * A randomly selected language code, for use as the default value in the language menu.
         * @type {string}
         * @private
         */
        this._randomLanguageCode = this._supportedLanguages[
            Math.floor(Math.random() * this._supportedLanguages.length)].value;

        /**
         * The result from the most recent translation.
         * @type {string}
         * @private
         */
        this._translateResult = '';

        /**
         * The language of the text most recently translated.
         * @type {string}
         * @private
         */
        this._lastLangTranslated = '';

        /**
         * The text most recently translated.
         * @type {string}
         * @private
         */
        this._lastTextTranslated = '';

        this.jointID = [];
        this.jointID["left hip"] = 0;
        this.jointID["left twist"] = 1;
        this.jointID["left knee"] = 2;
        this.jointID["right hip"] = 3;
        this.jointID["right twist"] = 4;
        this.jointID["right knee"] = 5;
        this.jointID["left arm"] = 6;
        this.jointID["right arm"] = 7;
        this.jointID["eyes"] = 8;
    }

    /**
     * The key to load & store a target's translate state.
     * @return {string} The key.
     */
    static get STATE_KEY () {
        return 'Scratch.marty';
    }
    
    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        return {
            id: 'marty',
            name: formatMessage({
                id: 'marty.categoryName',
                default: 'Marty the Robot',
                description: 'Name of extension that adds Marty the Robot blocks'
            }),
            blockIconURI: blockIconURI,
            showStatusButton: true,
            /* See https://github.com/LLK/scratch-vm/wiki/Scratch-3.0-Extensions-Specification */
            /* Note that the above is out-of-date on some members. */
            blocks: [
                {
                    opcode: 'm_hello',
                    text: formatMessage({
                        id: 'marty.getReadyBlock',
                        default: 'get ready',
                        description: 'Get ready'
                    }),
                    branchCount: 0,
                    terminal: false,
                    blockAllThreads: false,
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: 'm_stop',
                    text: formatMessage({
                        id: 'marty.stopBlock',
                        default: 'stop: [STOPTYPE]',
                        description: 'Stop the Robot'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        STOPTYPE: {
                            type: ArgumentType.STRING,
                            menu: 'stopTypes',
                            defaultValue: 'freeze',
                        }
                    }
                },
                {
                    opcode: 'm_disable_motors',
                    text: formatMessage({
                        id: 'marty.disableBlock',
                        default: 'turn off motors',
                        description: 'Turn off Motors'
                    }),
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: 'm_enable_motors',
                    text: formatMessage({
                        id: 'marty.enableBlock',
                        default: 'turn on motors',
                        description: 'Turn on Motors'
                    }),
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: 'm_stand_straight',
                    text: formatMessage({
                        id: 'marty.standStraightBlock',
                        default: 'stand straight in [MOVETIME]s',
                        description: 'Stand up straight'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        MOVETIME: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1,
                        }
                    }
                },
                '---',
                {
                    opcode: 'm_wiggle',
                    text: formatMessage({
                        id: 'marty.wiggleBlock',
                        default: 'wiggle',
                        description: 'Wiggle Celebration'
                    }),
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: 'm_circle_dance',
                    text: formatMessage({
                        id: 'marty.circleDanceBlock',
                        default: 'circle dance [DIRECTION] in [MOVETIME] s',
                        description: 'Circle Dance Celebration'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        DIRECTION: {
                            type: ArgumentType.STRING,
                            defaultValue: 'left',
                            menu: 'turn_directions',
                        },
                        MOVETIME: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                    }
                },
                {
                    opcode: 'm_play_sound',
                    text: formatMessage({
                        id: 'marty.playSoundBlock',
                        default: 'play sound from [STARTF]Hz to [STOPF]Hz over [DURATION]s',
                        description: 'Play Sound'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        STARTF: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 261,
                        },
                        STOPF: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 523,
                        },
                        DURATION: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0.5,
                        },
                    }
                },
                '---',
                {
                    opcode: 'm_walkf',
                    text: formatMessage({
                        id: 'marty.walkFBlock',
                        default: 'walk [NUMSTEPS] steps forwards',
                        description: 'Walking forwards block'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        NUMSTEPS: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 2,
                        },
                    }
                },
                {
                    opcode: 'm_walkb',
                    text: formatMessage({
                        id: 'marty.walkBBlock',
                        default: 'walk [NUMSTEPS] steps backwards',
                        description: 'Walking backwards block'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        NUMSTEPS: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 2,
                        },
                    }
                },
                {
                    opcode: 'm_walk',
                    text: formatMessage({
                        id: 'marty.walkBlock',
                        default: 'walk [NUMSTEPS] steps with length [STEPLEN] in [STEPTIME]s turning [TURN]',
                        description: 'Walking block'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        NUMSTEPS: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 2,
                        },
                        STEPLEN: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 45,
                        },
                        STEPTIME: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1.3,
                        },
                        TURN: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                    }
                },
                {
                    opcode: 'm_kick',
                    text: formatMessage({
                        id: 'marty.kickBlock',
                        default: 'kick [SIDE] leg',
                        description: 'Kicking block'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        SIDE: {
                            type: ArgumentType.STRING,
                            menu: 'turn_directions',
                            defaultValue: 'left',
                        },
                    }
                },
                {
                    opcode: 'm_turn',
                    text: formatMessage({
                        id: 'marty.turnBlock',
                        default: 'turn [DIRECTION] [NUMSTEPS] steps',
                        description: 'Turning block'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        DIRECTION: {
                            type: ArgumentType.STRING,
                            menu: 'turn_directions',
                            defaultValue: 'left',
                        },
                        NUMSTEPS: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 2,
                        },
                    }
                },
                {
                    opcode: 'm_lean',
                    text: formatMessage({
                        id: 'marty.leanBlock',
                        default: 'lean to the [SIDE] in [MOVETIME]s',
                        description: 'Leaning block'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        SIDE: {
                            type: ArgumentType.STRING,
                            menu: 'turn_directions',
                            defaultValue: 'left',
                        },
                        MOVETIME: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0.5,
                        },
                    }
                },
                {
                    opcode: 'm_sidestep',
                    text: formatMessage({
                        id: 'marty.sidestepBlock',
                        default: 'Slide [NUMSTEPS] times to the [SIDE] in [MOVETIME]s, length [STEPLEN]',
                        description: 'Leaning block'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        STEPLEN: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50,
                        },
                        SIDE: {
                            type: ArgumentType.STRING,
                            menu: 'turn_directions',
                            defaultValue: 'left',
                        },
                        NUMSTEPS: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                        MOVETIME: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0.8,
                        },
                    }
                },
                '---',
                {
                    opcode: 'm_eyes',
                    text: formatMessage({
                        id: 'marty.eyesBlock',
                        default: 'eyes [EYES]',
                        description: 'Eye block'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        EYES: {
                            type: ArgumentType.STRING,
                            menu: 'eyes',
                            defaultValue: 'excited',
                        },
                    }
                },
                {
                    opcode: 'm_move_leg',
                    text: formatMessage({
                        id: 'marty.moveLegFBlock',
                        default: 'move [LEG] leg [DIRECTION]',
                        description: 'Move leg forwards'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        LEG: {
                            type: ArgumentType.STRING,
                            menu: 'leg',
                            defaultValue: 'left',
                        },
                        DIRECTION: {
                            type: ArgumentType.STRING,
                            menu: 'saggital',
                            defaultValue: 'forward',
                        }
                    }
                },
                {
                    opcode: 'm_lift_leg',
                    text: formatMessage({
                        id: 'marty.liftLegBlock',
                        default: 'lift [LEG] leg',
                        description: 'Leg liftblock'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        LEG: {
                            type: ArgumentType.STRING,
                            menu: 'leg',
                            defaultValue: 'left',
                        },
                    }
                },
                {
                    opcode: 'm_lower_leg',
                    text: formatMessage({
                        id: 'marty.lowerLegBlock',
                        default: 'lower legs',
                        description: 'Lower legs'
                    }),
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: 'm_move_joint',
                    text: formatMessage({
                        id: 'marty.moveJointBlock',
                        default: 'move [JOINT] to [POSITION] in [MOVETIME]s',
                        description: 'Move a joint'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        JOINT: {
                            type: ArgumentType.STRING,
                            menu: 'joints',
                            defaultValue: 'right arm',
                        },
                        POSITION: {
                            type: ArgumentType.NUMBER,
                            defaultValue: -100,
                        },
                        MOVETIME: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1,
                        },
                    }
                },
                '---',
                {
                    opcode: 'm_get_batt',
                    text: formatMessage({
                        id: 'marty.battVoltBlock',
                        default: 'battery voltage',
                        description: 'Get battery voltage'
                    }),
                    blockType: BlockType.REPORTER,
                },
                {
                    opcode: 'm_get_gpio',
                    text: formatMessage({
                        id: 'marty.GPIOBlock',
                        default: 'GPIO input [GPIO]',
                        description: 'Get GPIO input'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        GPIO: {
                            type: ArgumentType.STRING,
                            menu: 'gpios',
                            defaultValue: '0',
                        },
                    }
                },
                {
                    opcode: 'm_get_motor_current',
                    text: formatMessage({
                        id: 'marty.motorCurrentBlock',
                        default: 'current from motor [MOTOR]',
                        description: 'Get motor current input'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        MOTOR: {
                            type: ArgumentType.STRING,
                            menu: 'motorCurrents',
                            defaultValue: 'right arm',
                        },
                    }
                },
                {
                    opcode: 'm_get_accel',
                    text: formatMessage({
                        id: 'marty.accelBlock',
                        default: 'accelerometer [AXIS]',
                        description: 'Get accelerometer input'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        AXIS: {
                            type: ArgumentType.STRING,
                            menu: 'accel',
                            defaultValue: 'X axis',
                        },
                    }
                },
                {
                    opcode: 'm_get_prox',
                    text: formatMessage({
                        id: 'marty.battProxBlock',
                        default: 'proximity sensor',
                        description: 'Get proximity sensor'
                    }),
                    blockType: BlockType.REPORTER,
                },
            ],
            menus: {
                languages: this._supportedLanguages,
                leg: ['left', 'right'],
                turn_directions: ['left', 'right'],
                directions: ['left', 'right', 'forward', 'backward'],
                eyes: ['normal', 'wide', 'angry', 'excited'],
                gpios: ['0', '1', '2', '3', '4', '5', '6', '7'],
                motorCurrents: ['right hip', 'right twist', 'right knee',
                                'left hip', 'left twist', 'left knee',
                                'right arm', 'left arm'],
                joints: ['right hip', 'right twist', 'right knee',
                         'left hip', 'left twist', 'left knee',
                         'right arm', 'left arm', 'eyes'],
                accel: ['X axis', 'Y axis', 'Z axis'],
                enabled: ['enabled', 'disabled'],
                saggital: ['forward', 'backward'],
                stopTypes: ['finish move', 'freeze',
                            'disable motors', 'return to zero',
                            'pause', 'pause and disable motors']
            }
        };
    }


    /****
     **
     ** B L O C K S
     **
     ****/

    m_hello () {
        this._peripheral.marty.hello(1);
    }

    m_stop (args) {
        STOPTYPE = 'freeze';
        this._peripheral.marty.stop(STOPTYPE);
    }

    m_disable_motors () {
        this._peripheral.marty.disable_motors();
    }

    m_enable_motors () {
        this._peripheral.marty.enable_motors();
    }

    m_stand_straight (args) {
        this._peripheral.marty.stand_straight(args.MOVETIME*1000);
    }

    /* - - - */

    m_wiggle () {
        this._peripheral.marty.celebrate(4000);
    }

    m_circle_dance (args) {
        this._peripheral.marty.circle_dance(args.DIRECTION, args.MOVETIME*1000);
    }

    m_play_sound (args) {
        this._peripheral.marty.play_sound(parseInt(args.STARTF), parseInt(args.STOPF),
                                          parseInt(args.DURATION*1000));
    }


    /* - - - */
    
    m_walk (args) {
        this._peripheral.marty.walk(parseInt(args.NUMSTEPS),
                                    parseInt(args.TURN),
                                    parseFloat(args.STEPTIME)*1000,
                                    parseInt(args.STEPLEN));
    }

    m_walkf (args) {
        this._peripheral.marty.walk(parseInt(args.NUMSTEPS), 0, 1500, 45);
    }

    m_walkb (args) {
        this._peripheral.marty.walk(parseInt(args.NUMSTEPS), 0, 1500, -45);
    }

    m_kick (args) {
        this._peripheral.marty.kick(args.SIDE, 0, 2000);
    }

    m_turn (args) {
        var turn = 80;
        if (args.DIRECTION == "right" ){
            turn = -80;
        }
        this._peripheral.marty.walk(parseInt(args.NUMSTEPS), turn, 1300, 0);
    }

    m_lean (args) {
        this._peripheral.marty.lean(args.SIDE, 60, args.MOVETIME*1000);
    }

    m_sidestep (args) {
        this._peripheral.marty.sidestep(args.SIDE,
                                        parseInt(args.NUMSTEPS),
                                        parseFloat(args.MOVETIME)*1000,
                                        parseInt(args.STEPLEN));
    }

    /* - - - */

    m_eyes (args) {
        var eyepos = [];
        eyepos['normal'] = 0; eyepos['angry'] = 50; eyepos['excited'] = -25; eyepos['wide'] = -100;
        this._peripheral.marty.move_joint(8, eyepos[args.EYES], 100);
    }

    m_lift_leg (args) {
        var joint;
        var mult = 1;
        if (args.LEG == 'left'){
            joint = 'left knee';
            mult = -1;
        } else {
            joint = 'right knee';
        }
        this._peripheral.marty.move_joint(this.jointID[joint], 80*mult, 750);
    }

    m_lower_leg () {
        var left_knee = this._peripheral.marty.get_sensor("mp" + this.jointID['left knee']);
        var right_knee = this._peripheral.marty.get_sensor("mp" + this.jointID['right knee']);
        /* if (left_knee === null || right_knee === null){
         *     setTimeout(ext.lower_leg, 200, callback);
         *     return;
         * }*/
        if (right_knee > 0 && right_knee > left_knee){
            this._peripheral.marty.move_joint(this.jointID['right knee'], left_knee, 500);
        } else {
            this._peripheral.marty.move_joint(this.jointID['left knee'], right_knee, 500);
        }
    }

    m_move_leg (args) {
        var joint;
        var mult = 1;
        if (args.LEG == 'left'){
            joint = 'left hip';
        } else {
            joint = 'right hip';
        }
        if (args.DIRECTION == 'forward'){mult = -1};
        this._peripheral.marty.move_joint(this.jointID[joint], 30*mult, 750);
    }

    m_move_joint (args) {
        this._peripheral.marty.move_joint(this.jointID[args.JOINT],
                                          args.POSITION,
                                          args.MOVETIME*1000);
    }

    /* - - - */

    m_get_batt () {
        /* TODO often returns null */
        return this._peripheral.marty.get_sensor("battery");
    }

    m_get_gpio (args) {
        /* TODO often returns null */
        return this._peripheral.marty.get_sensor("gpio" + args.GPIO);
    }

    m_get_motor_current (args) {
        /* TODO often returns null */
        return this._peripheral.marty.get_sensor("mc" + this.jointID[args.MOTOR]);
    }

    m_get_accel (args) {
        /* TODO often returns null */
        var axisID = [];
        axisID['X axis'] = 0; axisID['Y axis'] = 1; axisID['Z axis'] = 2;
        return this._peripheral.marty.get_sensor("acc" + axisID[args.AXIS]);
    }

    m_get_prox (args) {
        /* TODO often returns null */
        return this._peripheral.marty.get_sensor("prox");
    }

    /** * * * * * * * * * * **/

    
    /**
     * Get the human readable language value for the reporter block.
     * @return {string} the language name of the project viewer.
     */
    getViewerLanguage () {
        this._viewerLanguageCode = this.getViewerLanguageCode();
        const names = languageNames.menuMap[this._viewerLanguageCode];
        const langNameObj = names.find(obj => obj.code === this._viewerLanguageCode);
        let langName = this._viewerLanguageCode;
        if (langNameObj) {
            langName = langNameObj.name;
        }
        return langName;
    }

    /**
     * Get the viewer's language code.
     * @return {string} the language code.
     */
    getViewerLanguageCode () {
        const locale = formatMessage.setup().locale;
        const viewerLanguages = [locale].concat(navigator.languages);
        const languageKeys = Object.keys(languageNames.menuMap);
        // Return the first entry in viewerLanguages that matches
        // one of the available language keys.
        const languageCode = viewerLanguages.reduce((acc, lang) => {
            if (acc) {
                return acc;
            }
            if (languageKeys.indexOf(lang) > -1) {
                return lang;
            }
            return acc;
        }, '') || 'en';
        return languageCode;
    }

    /**
     * Get a language code from a block argument. The arg can be a language code
     * or a language name, written in any language.
     * @param  {object} arg A block argument.
     * @return {string} A language code.
     */
    getLanguageCodeFromArg (arg) {
        const languageArg = Cast.toString(arg).toLowerCase();
        // Check if the arg matches a language code in the menu.
        if (languageNames.menuMap.hasOwnProperty(languageArg)) {
            return languageArg;
        }
        // Check for a dropped-in language name, and convert to a language code.
        if (languageNames.nameMap.hasOwnProperty(languageArg)) {
            return languageNames.nameMap[languageArg];
        }
        // Default to English.
        return 'en';
    }

    /**
     * Translates the text in the translate block to the language specified in the menu.
     * @param {object} args - the block arguments.
     * @return {Promise} - a promise that resolves after the response from the translate server.
     */
    getTranslate (args) {
        // Don't remake the request if we already have the value.
        if (this._lastTextTranslated === args.WORDS &&
            this._lastLangTranslated === args.LANGUAGE) {
            return this._translateResult;
        }

        const lang = this.getLanguageCodeFromArg(args.LANGUAGE);

        let urlBase = `${serverURL}translate?language=`;
        urlBase += lang;
        urlBase += '&text=';
        urlBase += encodeURIComponent(args.WORDS);

        const tempThis = this;
        const translatePromise = new Promise(resolve => {
            nets({
                url: urlBase,
                timeout: serverTimeoutMs
            }, (err, res, body) => {
                if (err) {
                    log.warn(`error fetching translate result! ${res}`);
                    resolve('');
                    return '';
                }
                const translated = JSON.parse(body).result;
                tempThis._translateResult = translated;
                // Cache what we just translated so we don't keep making the
                // same call over and over.
                tempThis._lastTextTranslated = args.WORDS;
                tempThis._lastLangTranslated = args.LANGUAGE;
                resolve(translated);
                return translated;
            });

        });
        translatePromise.then(translatedText => translatedText);
        return translatePromise;
    }
}


module.exports = Scratch3MartyBlocks;
