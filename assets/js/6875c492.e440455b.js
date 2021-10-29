"use strict";(self.webpackChunkemily_page=self.webpackChunkemily_page||[]).push([[610],{6165:function(e,t,a){a.d(t,{Z:function(){return b}});var r=a(3366),l=a(7294),n=a(6010),s=a(3938),m=a(6742),i="sidebar_2ahu",c="sidebarItemTitle_2hhb",o="sidebarItemList_2xAf",u="sidebarItem_2UVv",g="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",p=a(4973);function h(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(c,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var E=["sidebar","toc","children"];var b=function(e){var t=e.sidebar,a=e.toc,m=e.children,i=(0,r.Z)(e,E),c=t&&t.items.length>0;return l.createElement(s.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},c&&l.createElement("aside",{className:"col col--3"},l.createElement(h,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},m),a&&l.createElement("div",{className:"col col--2"},a))))}},4884:function(e,t,a){a.d(t,{Z:function(){return N}});var r=a(7294),l=a(6010),n=a(3905),s=a(4973),m=a(6742),i=a(4996),c=a(3773),o=a(5867),u=a(6146),g="blogPostTitle_GeHD",d="blogPostData_291c",p="blogPostDetailsFull_3kfx",h=a(7682),E="image_1yU8";var b=function(e){var t=e.author,a=t.name,l=t.title,n=t.url,s=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},s&&r.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:n},r.createElement("img",{className:E,src:s,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(m.Z,{href:n,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},v="authorCol_1R69";function f(e){var t=e.authors,a=e.assets;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var n;return r.createElement("div",{className:(0,l.Z)("col col--6",v),key:t},r.createElement(b,{author:Object.assign({},e,{imageURL:null!=(n=a.authorsImageUrls[t])?n:e.imageURL})}))})))}var N=function(e){var t,a,E,b,v=(E=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return E(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),N=(0,i.C)().withBaseUrl,Z=e.children,_=e.frontMatter,k=e.assets,P=e.metadata,T=e.truncated,w=e.isBlogPostPage,y=void 0!==w&&w,M=P.date,U=P.formattedDate,L=P.permalink,I=P.tags,x=P.readingTime,C=P.title,R=P.editUrl,B=P.authors,A=null!=(t=k.image)?t:_.image,F=!y&&T,z=I.length>0;return r.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(b=y?"h1":"h2",r.createElement("header",null,r.createElement(b,{className:g,itemProp:"headline"},y?C:r.createElement(m.Z,{itemProp:"url",to:L},C)),r.createElement("div",{className:(0,l.Z)(d,"margin-vert--md")},r.createElement("time",{dateTime:M,itemProp:"datePublished"},U),void 0!==x&&r.createElement(r.Fragment,null," \xb7 ",v(x))),r.createElement(f,{authors:B,assets:k}))),A&&r.createElement("meta",{itemProp:"image",content:N(A,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:o.Z},Z)),(z||T)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[p]=y,a))},z&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":F})},r.createElement(h.Z,{tags:I})),y&&R&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:R})),F&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":z})},r.createElement(m.Z,{to:P.permalink,"aria-label":"Read more about "+C},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9404:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=a(7294),l=a(6742),n=a(6165),s=a(4884),m=a(4973),i=a(3773);function c(e){var t,a=e.metadata,c=e.items,o=e.sidebar,u=a.allTagsPath,g=a.name,d=a.count,p=(t=(0,i.c2)().selectMessage,function(e){return t(e,(0,m.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,m.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:p(d),tagName:g});return r.createElement(n.Z,{title:h,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:o},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,h),r.createElement(l.Z,{href:u},r.createElement(m.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),c.map((function(e){var t=e.content;return r.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},6146:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(7294),l=a(4973),n=a(7462),s=a(3366),m=a(6010),i="iconEdit_2_ui",c=["className"],o=function(e){var t=e.className,a=(0,s.Z)(e,c);return r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,m.Z)(i,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(3773);function g(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},r.createElement(o,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7211:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),l=a(6010),n=a(6742),s="tag_1Okp",m="tagRegular_3MiF",i="tagWithCount_1HU1";var c=function(e){var t,a=e.permalink,c=e.name,o=e.count;return r.createElement(n.Z,{href:a,className:(0,l.Z)(s,(t={},t[m]=!o,t[i]=o,t))},c,o&&r.createElement("span",null,o))}},7682:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),l=a(6010),n=a(4973),s=a(7211),m="tags_2ga9",i="tag_11ep";function c(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(m,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:i},r.createElement(s.Z,{name:t,permalink:a}))}))))}}}]);