# DNS Infrastructure for Better Informatics

This repository controls the DNS records for Better Informatics.

Specifically, `dnsconfig.js` contains all the records that are pushed to
CloudFlare through CI. All pushes to `main` will trigger a push to production,
while pull requests will receive a comment describing the effects of the change.

We control the following zone(s):
- `betterinformatics.com`

For any questions, please open an issue or contact Better Informatics Admins
via the [CompSoc Discord](https://comp-soc.com/) or via email on
`admin -at- betterinformatics.com`.
a