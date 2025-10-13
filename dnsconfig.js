// We manage our DNS on Cloudflare
var DSP_CLOUDFLARE = NewDnsProvider("cloudflare", "-");

// DNScontrol should not talk to the registrar - it is set up manually
var REG_NONE = NewRegistrar("none");

var tardis = IP("209.16.157.132")

D("betterinformatics.com", REG_NONE,
    DnsProvider(DSP_CLOUDFLARE),
    DefaultTTL(1),

    // Static knowledgebase
    // https://github.com/compsoc-edinburgh/betterinformatics
    // See: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
    A("@", "185.199.108.153", CF_PROXY_ON),
    A("@", "185.199.109.153", CF_PROXY_ON),
    A("@", "185.199.110.153", CF_PROXY_ON),
    A("@", "185.199.111.153", CF_PROXY_ON),

    // File collection
    // https://github.com/compsoc-edinburgh/betterinformatics-files
    A("files", tardis, CF_PROXY_ON),

    // Attempting preview deployments for file colection
    A("*.preview.files", tardis, CF_PROXY_ON),

    // Analytics hosted on Tardis
    A("analytics", tardis, CF_PROXY_ON),

    // Welcome page by Angus Pearson
    // https://github.com/compsoc-edinburgh/bi-welcome
    CNAME("welcome", "betterinformatics.github.io."),

    // Unused Digital Ocean, previously briefly used to host dynamic content
    A("www", "139.59.162.177", CF_PROXY_ON),

    // Records needed for @betterinformatics.com email addresses registered
    // with the CompSoc Google Workspace
    MX("@", 1, "aspmx.l.google.com."),
    MX("@", 5, "alt1.aspmx.l.google.com."),
    MX("@", 5, "alt2.aspmx.l.google.com."),
    MX("@", 10, "aspmx2.googlemail.com."),
    MX("@", 10, "aspmx3.googlemail.com."),

    // Mailgun
    CNAME("email.mail", "mailgun.org."),
    MX("mail", 10, "mxa.mailgun.org."),
    MX("mail", 10, "mxb.mailgun.org."),

    // Site ownership verification
    // Google:
    TXT("@", "google-site-verification=icngKtS5RWHJ4PzhEMS3d5ZRXK_3Qj1_jRAqCHcZNAw"),
    TXT("@", "google-site-verification=KkNJEvdhFAGRgjUjXP8JL9Kgc6g2IQ9yK-XKopEWLPc"),
    // GitHub
    TXT("_github-challenge-compsoc-edinburgh", "9129fe68d6"),
    // Mailgun SPF?
    TXT("mail", "v=spf1 include:mailgun.org ~all"),
    // Mailgun DKIM?
    TXT("mailo._domainkey.mail", "k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlK5k+ZU7eYoJfwHhYCv7MusRTxJdyF2oGGOyMp5ExZDpZub9dekTKHcEmgXmC7KKngRCzEGWpBzt5dfnG7nJtY3jkmj2tfQOV+wgJ4bmE3cpIYOYabXcbQRUc8gAoJV51gte2Wxl2Yhixafy+drXi5pP1S/dJlkNFpOmIud9newIDAQAB"),
);
