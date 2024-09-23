let ofertas = {};

formatarDados = (objeto) => {
  let dadosFormatados = objeto;
  dadosFormatados.offers.forEach((element) => {
    switch (element.kind) {
      case "ead":
        element.kind = "EaD 🏫.";
        break;
      default:
        element.kind = "Presencial 🏫.";
    }

    switch (element.level) {
      case "bacharelado":
        element.level = "Graduação (bacharelado) 🎓.";
        break;
      case "tecnologo":
        element.level = "Graduação (tecnólogo) 🎓.";
        break;
      case "licenciatura":
        element.level = "Graduação (licenciatura) 🎓.";
        break;
    }

    element.fullPrice = "R$" + element.fullPrice.toFixed(2).replace(".", ",");
    element.offeredPrice =
      "R$" + element.offeredPrice.toFixed(2).replace(".", ",");
  });
  return dadosFormatados
}

const orderByCourse = (objeto) => {
  let dadosFormatados = objeto;
  dadosFormatados.offers.sort((a, b) => {
    if (a.courseName < b.courseName) {
      return -1;
    }
    if (a.courseName > b.courseName) {
      return 1;
    }
    return 0;
  });

  return dadosFormatados;
};

const getOfertasOrderByCourse = (req, res) => {
  if (Object.keys(ofertas).length === 0) {
    return res.status(400).send({ message: "Nenhuma oferta foi registrada!" });
  }

  const ofertasOrdenadas = orderByCourse(ofertas);
  return res.status(200).send(ofertasOrdenadas);
};


const getOfertas = (req, res) => {
  if (Object.keys(ofertas).length === 0) {
    return res.status(400).send({ message: "Nenhuma oferta foi registrada!" });
  }
  return res.status(200).send(formatarDados(ofertas));
};

const getOfertasByLevel = (req, res) => {
  const level = req.params.level;
  let ofertasFiltro = { offers: [] };

  ofertas.offers.forEach((element) => {
    if (element.level === level) {
      ofertasFiltro.offers.push(element);
    }
  });
  if (ofertasFiltro.offers.length === 0) {
    return res.status(200).send({ mensagem: "Nenhum dado encontrado" });
  }
  return res.status(200).send(formatarDados(ofertasFiltro));
};

const getOfertasByKind = (req, res) => {
  const kind = req.params.kind;
  let ofertasFiltro = { offers: [] };

  ofertas.offers.forEach((element) => {
    if (element.kind === kind) {
      ofertasFiltro.offers.push(element);
    }
  });
  if (ofertasFiltro.offers.length === 0) {
    return res.status(200).send({ mensagem: "Nenhum dado encontrado" });
  }
  return res.status(200).send(formatarDados(ofertasFiltro));
};

const getOfertasByPrice = (req, res) => {
  const firstPrice = req.params.firstPrice;
  const secondPrice = req.params.secondPrice;
  let ofertasFiltro = { offers: [] };

  let maior, menor

  maior = Math.max(firstPrice, secondPrice)
  menor = Math.min(firstPrice, secondPrice);

  ofertas.offers.forEach((element) => {
    if (element.fullPrice >= menor && element.fullPrice <= maior) {
      ofertasFiltro.offers.push(element);
    }
  });
  if (ofertasFiltro.offers.length === 0) {
    return res.status(200).send({ mensagem: "Nenhum dado encontrado" });
  }
  return res.status(200).send(formatarDados(ofertasFiltro));
};

const postOfertas = (req, res) => {
  ofertas = req.body;
  return res.status(200).send("Ofertas recebidas!");
};

module.exports = {
  getOfertas,
  getOfertasByLevel,
  postOfertas,
  getOfertasByKind,
  getOfertasByPrice,
  getOfertasOrderByCourse,
};
