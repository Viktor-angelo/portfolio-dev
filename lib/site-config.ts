// Edite facilmente os dados do site aqui.

export const siteConfig = {
  name: "Viktor Angelo",
  role: "Desenvolvedor Front-end",
  // Substitua pelo seu número com DDI + DDD (apenas dígitos).
  whatsappNumber: "5511961071305",
  whatsappMessage:
    "Olá Viktor! Vi seu portfólio e gostaria de conversar sobre um projeto.",
  avatar: "/avatar.png",
}

export function whatsappLink() {
  const text = encodeURIComponent(siteConfig.whatsappMessage)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`
}
