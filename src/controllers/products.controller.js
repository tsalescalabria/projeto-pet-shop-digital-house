var products = [
    {produto: "Anti-inflamatório Elo-xicam Comprimido 2mg  Chemitec", slug: "anti-inflamatorio-elo-xicam-comprimido-2mg-chemitec-pr-11735-496822", preco: "R$ 26,90", image:"/img/pet-prod.png"},
    {produto: "Tapete Higiênico Good Pad 50unid. 60x60cm + Brinde", slug: "tapete-higienico-good-pad-50unid-60x60cm-brinde-pr-27495-496822", preco: "R$ 67,80", image:"/img/pet-prod.png"},
    {produto: "Casa de cachorro nº 3 Christino", slug: "casa-de-cachorro-no-3-christino-pr-26201-496822", preco: "R$ 92,60", image:"/img/pet-prod.png"},
    {produto: "Tapete Higiênico Economicão Slim - 30 Unidades", slug: "/tapete-higienico-economicao-slim-30-unidades-pr-27491-496822", preco: "R$ 44,90", image:"/img/pet-prod.png"},
    {produto: "Anti-inflamatório Elo-xicam Comprimido 2mg  Chemitec", slug: "anti-inflamatorio-elo-xicam-comprimido-2mg-chemitec-pr-11735-496822", preco: "R$ 26,90", image:"/img/pet-prod.png"},
    {produto: "Tapete Higiênico Good Pad 50unid. 60x60cm + Brinde", slug: "tapete-higienico-good-pad-50unid-60x60cm-brinde-pr-27495-496822", preco: "R$ 67,80", image:"/img/pet-prod.png"},
    {produto: "Casa de cachorro nº 3 Christino", slug: "casa-de-cachorro-no-3-christino-pr-26201-496822", preco: "R$ 92,60", image:"/img/pet-prod.png"},
    {produto: "Tapete Higiênico Economicão Slim - 30 Unidades", slug: "/tapete-higienico-economicao-slim-30-unidades-pr-27491-496822", preco: "R$ 44,90", image:"/img/pet-prod.png"},

];

module.exports = {
    list: (req, res) => {
        res.render('products', {products:products})
    }
}
