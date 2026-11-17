/**
 * 站点信息：改链接或文案只动这一块。
 *
 * portfolioUrl — Notion 作品集二级域名
 * githubUrl    — GitHub 主页
 * email        — 联系邮箱
 *
 * INTRO_SENTENCE 是开场动画打出来的整句话：按空格分词后，
 * 每个词（以及单独的 "."）的首字母连起来必须正好是 ZANEMONO.COM，
 * 否则收拢动画的标题会对不上。改这句话时请保持这个对应关系。
 */
export const SITE = {
    name: "Zane Charles",
    nameZh: "张畅",
    domainLabel: "ZANEMONO.COM",
    motto: "Per aspera ad astra.",
    portfolioUrl: "https://portfolio.zanemono.com",
    githubUrl: "https://github.com/ZaneCharles",
    email: "contact@zanemono.com",
} as const;

export const INTRO_SENTENCE = "Zane And Nightly Echoes Make Odd Notes Online . Code On Midnight";
