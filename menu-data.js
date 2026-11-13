// ============================================================
// CUARTO DE PASOS — DATOS DEL MENÚ
// ============================================================
// Para modificar productos o precios, edita este archivo.
// - Para CAMBIAR UN PRECIO: busca el producto y cambia el número del precio.
// - Para AÑADIR UN PRODUCTO: copia una línea similar y modifícala.
// - Para ELIMINAR UN PRODUCTO: borra la línea completa del producto.
// - Para AÑADIR UN IDIOMA: añade una nueva clave (ej: "it" para italiano) en cada "desc".
//
// Idiomas disponibles: es (Español), en (English), fr (Français), de (Deutsch)
// ============================================================

const MENU_DATA = {
  restaurant: {
    name: "Cuarto de Pasos",
    subtitle: {
      es: "Bar de Tapas · Abacería",
      en: "Tapas Bar · Grocery",
      fr: "Bar à Tapas · Épicerie",
      de: "Tapas-Bar · Feinkost"
    },
    slogan: {
      es: "Entre cofrades la mesa es una y la cuenta también",
      en: "Among brethren, the table is one and so is the bill",
      fr: "Entre confrères, la table est une et l'addition aussi",
      de: "Unter Brüdern ist der Tisch eins und die Rechnung auch"
    },
    allergenNote: {
      es: "Este establecimiento no puede garantizar la ausencia total de trazas de otros alérgenos no reflejados de forma directa debido a los procesos de manipulación y emplatado en barra y cocina (contaminación cruzada). Si padece una alergia o intolerancia severa, por favor, notifíquelo a nuestro personal antes de realizar su pedido.",
      en: "This establishment cannot guarantee the total absence of traces of allergens not directly listed due to handling and plating processes at the bar and kitchen (cross-contamination). If you suffer from a severe allergy or intolerance, please notify our staff before placing your order.",
      fr: "Cet établissement ne peut garantir l'absence totale de traces d'allergènes non directement indiqués en raison des processus de manipulation et de mise en assiette au bar et en cuisine (contamination croisée). Si vous souffrez d'une allergie ou intolérance sévère, veuillez en informer notre personnel avant de passer votre commande.",
      de: "Dieses Lokal kann das vollständige Fehlen von Spuren anderer, nicht direkt aufgeführter Allergene aufgrund der Handhabungs- und Anrichteprozesse an Bar und Küche (Kreuzkontamination) nicht garantieren. Wenn Sie an einer schweren Allergie oder Unverträglichkeit leiden, informieren Sie bitte unser Personal, bevor Sie Ihre Bestellung aufgeben."
    },
    glutenFreeNote: {
      es: "Disponemos de pan sin gluten",
      en: "Gluten-free bread available",
      fr: "Pain sans gluten disponible",
      de: "Glutenfreies Brot verfügbar"
    }
  },

  // ============================================================
  // IDIOMAS DISPONIBLES (para el selector de la página)
  // ============================================================
  languages: {
    es: { label: "Español", flag: "🇪🇸" },
    en: { label: "English", flag: "🇬🇧" },
    fr: { label: "Français", flag: "🇫🇷" },
    de: { label: "Deutsch", flag: "🇩🇪" }
  },

  // ============================================================
  // ETIQUETAS DE LA INTERFAZ
  // ============================================================
  ui: {
    menuTitle:     { es: "Carta",      en: "Menu",      fr: "Carte",       de: "Speisekarte" },
    breakfastTitle:{ es: "Desayunos",  en: "Breakfast",  fr: "Petit-déjeuner", de: "Frühstück" },
    drinksTitle:   { es: "Bebidas",    en: "Drinks",     fr: "Boissons",    de: "Getränke" },
    halfSize:      { es: "Medias",     en: "Half",       fr: "Demi",        de: "Halb" },
    fullSize:      { es: "Entera",     en: "Full",       fr: "Entière",     de: "Ganz" },
    tapa:          { es: "Tapa",       en: "Tapa",       fr: "Tapa",        de: "Tapa" },
    plate:         { es: "Plato",      en: "Plate",      fr: "Assiette",    de: "Teller" },
    supplement:    { es: "Suplemento", en: "Supplement",  fr: "Supplément",  de: "Zuschlag" },
    askStaff:      { es: "Pregunte a nuestro personal", en: "Ask our staff", fr: "Demandez à notre personnel", de: "Fragen Sie unser Personal" },
    seasonalSweets:{ es: "Pregunte por nuestros dulces de temporada a nuestro personal", en: "Ask our staff about seasonal sweets", fr: "Demandez à notre personnel les desserts de saison", de: "Fragen Sie unser Personal nach saisonalen Süßspeisen" },
    extras:        { es: "Extras",     en: "Extras",     fr: "Extras",      de: "Extras" }
  },

  // ============================================================
  // SECCIONES DEL MENÚ
  // ============================================================
  sections: [

    // ─── CARTA PRINCIPAL ───
    {
      tab: "menu",
      id: "montaditos",
      name: { es: "Montaditos", en: "Small Sandwiches", fr: "Petits Sandwichs", de: "Kleine Brötchen" },
      items: [
        { name: "Jartible",     desc: { es: "Carne mechá con mojo picón", en: "Pulled pork with mojo picón sauce", fr: "Effiloché de porc au mojo picón", de: "Pulled Pork mit Mojo-Picón-Sauce" }, price: 2.50 },
        { name: "Reboto",       desc: { es: "Carne mechá con salmorejo", en: "Pulled pork with salmorejo", fr: "Effiloché de porc au salmorejo", de: "Pulled Pork mit Salmorejo" }, price: 2.50 },
        { name: "Cirial",       desc: { es: "Carne mechá con salsa gaucha", en: "Pulled pork with gaucho sauce", fr: "Effiloché de porc à la sauce gaucho", de: "Pulled Pork mit Gaucho-Sauce" }, price: 2.50 },
        { name: "Zanco",        desc: { es: "Carne mechá con roquefort", en: "Pulled pork with roquefort", fr: "Effiloché de porc au roquefort", de: "Pulled Pork mit Roquefort" }, price: 2.50 },
        { name: "Revirá",       desc: { es: "Chicharrón", en: "Pork crackling", fr: "Couenne de porc croustillante", de: "Schweinegrieben" }, price: 2.50 },
        { name: "Naveta",       desc: { es: "Caballa con tomate y mahonesa", en: "Mackerel with tomato and mayonnaise", fr: "Maquereau à la tomate et mayonnaise", de: "Makrele mit Tomate und Mayonnaise" }, price: 2.50 },
        { name: "Muñidor",      desc: { es: "Caballa con pimiento del piquillo", en: "Mackerel with piquillo pepper", fr: "Maquereau au piment piquillo", de: "Makrele mit Piquillo-Paprika" }, price: 2.50 },
        { name: "Pertiguero",   desc: { es: "Chorizo picante", en: "Spicy chorizo", fr: "Chorizo piquant", de: "Scharfe Chorizo" }, price: 2.50 },
        { name: "Costal",       desc: { es: "Lomo, beicon, queso fundido, tomate natural, mahonesa", en: "Pork loin, bacon, melted cheese, fresh tomato, mayonnaise", fr: "Longe de porc, bacon, fromage fondu, tomate fraîche, mayonnaise", de: "Schweinelende, Bacon, Schmelzkäse, frische Tomate, Mayonnaise" }, price: 3.00 },
        { name: "Trabajadera",  desc: { es: "Salmón y queso fresco", en: "Salmon and fresh cheese", fr: "Saumon et fromage frais", de: "Lachs und Frischkäse" }, price: 3.00 },
        { name: "Llamador",     desc: { es: "Pringá", en: "Pringá (slow-cooked meat stew)", fr: "Pringá (ragoût de viandes)", de: "Pringá (langsam geschmorter Fleischeintopf)" }, price: 2.80 },
        { name: "Candelabro",   desc: { es: "Lacón con rulo de cabra y cebolla caramelizada", en: "Cured pork shoulder with goat cheese roll and caramelized onion", fr: "Épaule de porc salée avec fromage de chèvre et oignon caramélisé", de: "Gepökeltes Schweineschulter mit Ziegenfrischkäse und karamellisierten Zwiebeln" }, price: 3.00 },
        { name: "Corriente",    desc: { es: "Tortilla", en: "Spanish omelette", fr: "Tortilla espagnole", de: "Spanisches Omelett" }, price: 2.50 },
        { name: "Respiradero",  desc: { es: "Lomo", en: "Pork loin", fr: "Longe de porc", de: "Schweinelende" }, price: 2.50 },
        { name: "Peregrino",    desc: { es: "Anchoa con rulo de cabra", en: "Anchovy with goat cheese roll", fr: "Anchois au fromage de chèvre", de: "Sardelle mit Ziegenkäserolle" }, price: 3.50 }
      ]
    },

    {
      tab: "menu",
      id: "tapas-frias",
      name: { es: "Tapas Frías", en: "Cold Tapas", fr: "Tapas Froides", de: "Kalte Tapas" },
      items: [
        { name: "Salmorejo",    desc: { es: "Salmorejo", en: "Chilled tomato cream soup", fr: "Soupe froide de tomates", de: "Kalte Tomatencremesuppe" }, price: 2.50 },
        { name: "Tortilla",     desc: { es: "Tortilla", en: "Spanish omelette", fr: "Tortilla espagnole", de: "Spanisches Omelett" }, price: 2.50 },
        { name: "Ensaladilla",  desc: { es: "Ensaladilla", en: "Russian salad", fr: "Salade russe", de: "Russischer Salat" }, price: 2.50 },
        { name: "Espinaca Labrá", desc: { es: "Espinaca labrá", en: "Sautéed spinach with chickpeas", fr: "Épinards sautés aux pois chiches", de: "Gebratener Spinat mit Kichererbsen" }, price: 2.50 },
        { name: "Gildas",       desc: { es: "Gildas", en: "Olive, anchovy & pepper skewer", fr: "Brochette olive, anchois et piment", de: "Oliven-Sardellen-Paprika-Spieß" }, price: 3.50 },
        { name: "Mejillones al Natural", desc: { es: "Mejillones al natural", en: "Natural mussels", fr: "Moules au naturel", de: "Muscheln natur" }, price: 2.50 },
        { name: "Mejillón al Natural con Picadillo", desc: { es: "Mejillón al natural con picadillo", en: "Natural mussels with vegetable mince", fr: "Moules au naturel avec picadillo", de: "Muscheln natur mit Gemüsehack" }, price: 3.00 },
        { name: "Salpicón",     desc: { es: "Salpicón", en: "Seafood salad", fr: "Salade de fruits de mer", de: "Meeresfrüchtesalat" }, price: 2.50 },
        { name: "Chasca",       desc: { es: "Chasca", en: "Chasca", fr: "Chasca", de: "Chasca" }, price: 2.50 },
        { name: "Patatas Alioli", desc: { es: "Patatas alioli", en: "Potatoes with garlic mayonnaise", fr: "Pommes de terre à l'aïoli", de: "Kartoffeln mit Knoblauch-Mayonnaise" }, price: 2.50 },
        { name: "Sartencita de Queso Provolone", desc: { es: "Sartencita de queso provolone", en: "Mini skillet of provolone cheese", fr: "Mini poêle de fromage provolone", de: "Kleine Pfanne mit Provolone-Käse" }, price: 3.50 },
        { name: "Chicharrón Frito", desc: { es: "Chicharrón frito", en: "Fried pork crackling", fr: "Couenne de porc frite", de: "Frittierte Schweinegrieben" }, price: 2.80 },
        { name: "Tapa del Día", desc: { es: "Pregunte a nuestro personal", en: "Ask our staff", fr: "Demandez à notre personnel", de: "Fragen Sie unser Personal" }, price: 2.50 },
        { name: "Corazoncito de Alcachofa", desc: { es: "Corazoncito de alcachofa", en: "Artichoke hearts", fr: "Cœurs d'artichaut", de: "Artischockenherzen" }, price: 2.80 },
        { name: "Pastel de Berenjena", desc: { es: "Pastel de berenjena", en: "Eggplant cake", fr: "Gâteau d'aubergine", de: "Auberginenkuchen" }, price: 2.50 },
        { name: "Boquerones en Vinagre", desc: { es: "Boquerones en vinagre", en: "Anchovies in vinegar", fr: "Anchois au vinaigre", de: "Sardellen in Essig" }, price: 2.50 }
      ]
    },

    {
      tab: "menu",
      id: "tostas",
      name: { es: "Tostas", en: "Toasts", fr: "Tartines", de: "Geröstete Brote" },
      items: [
        { name: "Prioste",      desc: { es: "Anchoa con leche condensada", en: "Anchovy with condensed milk", fr: "Anchois au lait concentré", de: "Sardelle mit Kondensmilch" }, price: 3.50 },
        { name: "Vocal",        desc: { es: "Anchoa", en: "Anchovy", fr: "Anchois", de: "Sardelle" }, price: 3.50 },
        { name: "Mayordomo",    desc: { es: "Sardina ahumada con salmorejo", en: "Smoked sardine with salmorejo", fr: "Sardine fumée au salmorejo", de: "Geräucherte Sardine mit Salmorejo" }, price: 3.80 },
        { name: "Secretario",   desc: { es: "Anchoa y queso", en: "Anchovy and cheese", fr: "Anchois et fromage", de: "Sardelle und Käse" }, price: 3.50 },
        { name: "Diputado",     desc: { es: "Mojama, queso crema y cebolla caramelizada", en: "Dried tuna, cream cheese and caramelized onion", fr: "Thon séché, fromage frais et oignon caramélisé", de: "Getrockneter Thunfisch, Frischkäse und karamellisierte Zwiebeln" }, price: 3.80 },
        { name: "Camarera",     desc: { es: "Mohama", en: "Dried tuna", fr: "Thon séché", de: "Getrockneter Thunfisch" }, price: 3.50 },
        { name: "Aguaó",        desc: { es: "Tomate con palometa ahumada", en: "Tomato with smoked pomfret", fr: "Tomate à la palomète fumée", de: "Tomate mit geräuchertem Brachsenmakrele" }, price: 3.50 },
        { name: "Contraguía",   desc: { es: "Aguacate y palometa ahumada", en: "Avocado and smoked pomfret", fr: "Avocat et palomète fumée", de: "Avocado und geräucherte Brachsenmakrele" }, price: 4.00 },
        { name: "Mantoleta",    desc: { es: "Base de salmorejo cubierta de chicharrón", en: "Salmorejo base topped with pork crackling", fr: "Base de salmorejo garnie de couenne croustillante", de: "Salmorejo-Basis mit knuspriger Schweinekruste" }, price: 3.50 },
        { name: "Misterio",     desc: { es: "Base de pico de gallo cubierta de palometa, con guacamole y crema agria con un toque de camarón", en: "Pico de gallo base topped with pomfret, guacamole and sour cream with a touch of shrimp", fr: "Base de pico de gallo garnie de palomète, guacamole et crème aigre avec une touche de crevette", de: "Pico-de-Gallo-Basis mit Brachsenmakrele, Guacamole und Sauerrahm mit einem Hauch von Garnele" }, price: 4.00 },
        { name: "Carreta",      desc: { es: "Morcilla con rulo de cabra y cebolla caramelizada", en: "Blood sausage with goat cheese roll and caramelized onion", fr: "Boudin noir au fromage de chèvre et oignon caramélisé", de: "Blutwurst mit Ziegenkäserolle und karamellisierten Zwiebeln" }, price: 4.00 },
        { name: "Tamborilero",  desc: { es: "Queso curado con anchoa", en: "Cured cheese with anchovy", fr: "Fromage affiné aux anchois", de: "Gereifter Käse mit Sardelle" }, price: 4.00 },
        { name: "Al Cielo con Él", desc: { es: "Lomo de orza con pimienta y sal de tinto", en: "Preserved pork loin with pepper and red wine salt", fr: "Longe de porc confite au poivre et sel de vin rouge", de: "Eingelegtes Schweinelende mit Pfeffer und Rotweinsalz" }, price: 4.00 },
        { name: "Rociero",      desc: { es: "Ensalada de salmón", en: "Salmon salad", fr: "Salade de saumon", de: "Lachssalat" }, price: 4.00 }
      ]
    },

    {
      tab: "menu",
      id: "tostones",
      name: { es: "Tostones", en: "Large Toasts", fr: "Grandes Tartines", de: "Große Geröstete Brote" },
      items: [
        { name: "Capataz",       desc: { es: "Carne mechá con crema de queso viejo", en: "Pulled pork with aged cheese cream", fr: "Effiloché de porc à la crème de vieux fromage", de: "Pulled Pork mit gereifter Käsecreme" }, price: 12.00 },
        { name: "Hermano Mayor", desc: { es: "Lomo al whisky y jamón con crema de queso viejo", en: "Pork loin in whisky sauce and ham with aged cheese cream", fr: "Longe de porc au whisky et jambon à la crème de vieux fromage", de: "Schweinelende in Whisky-Sauce und Schinken mit gereifter Käsecreme" }, price: 14.00 },
        { name: "Fiscal",        desc: { es: "Ahumados", en: "Smoked selection", fr: "Assortiment fumé", de: "Geräucherte Auswahl" }, price: 13.00 }
      ]
    },

    {
      tab: "menu",
      id: "platos",
      name: { es: "Platos", en: "Dishes", fr: "Plats", de: "Gerichte" },
      items: [
        { name: "Tomate con Melva", desc: { es: "Tomate con melva", en: "Tomato with frigate tuna", fr: "Tomate à la melva", de: "Tomate mit Fregattmakrele" }, price: 9.50 },
        { name: "Papas Aliñás Sanluqueñas", desc: { es: "Con melva cañutera", en: "With frigate tuna", fr: "Avec melva cañutera", de: "Mit Fregattmakrele" }, price: 6.00 },
        { name: "Capirote",      desc: { es: "Nachos con chédar, puedes elegirlo con bacon o salmón", en: "Nachos with cheddar, choose with bacon or salmon", fr: "Nachos au cheddar, au choix avec bacon ou saumon", de: "Nachos mit Cheddar, wahlweise mit Bacon oder Lachs" }, price: 15.50 },
        { name: "Chicharrón de Cádiz", desc: { es: "Chicharrón de Cádiz", en: "Cádiz-style fried fish batter", fr: "Chicharrón de Cadix", de: "Chicharrón aus Cádiz" }, price: 9.00 }
      ]
    },

    {
      tab: "menu",
      id: "chacina",
      name: { es: "Chacina", en: "Charcuterie", fr: "Charcuterie", de: "Wurstwaren" },
      items: [
        { name: "Queso Curado de Oveja", desc: { es: "Queso curado de oveja", en: "Cured sheep cheese", fr: "Fromage de brebis affiné", de: "Gereifter Schafskäse" }, price: 2.50, priceLabel: "tapa" },
        { name: "Salchichón Ibérico", desc: { es: "Salchichón ibérico", en: "Iberian salami", fr: "Saucisson ibérique", de: "Iberische Salami" }, price: 2.50, priceLabel: "tapa" },
        { name: "Jamón Ibérico de Cebo", desc: { es: "Jamón ibérico de cebo (plato)", en: "Iberian acorn-fed ham (plate)", fr: "Jambon ibérique (assiette)", de: "Iberischer Schinken (Teller)" }, price: 14.00, priceLabel: "plato" },
        { name: "Caña Lomo",     desc: { es: "Caña de lomo", en: "Cured pork loin", fr: "Longe de porc séchée", de: "Getrocknete Schweinelende" }, priceTapa: 2.50, pricePlato: 10.00 },
        { name: "Tabla de Embutidos Gourmet", desc: { es: "Tabla de embutidos gourmet (200 gramos aprox.)", en: "Gourmet charcuterie board (approx. 200g)", fr: "Planche de charcuterie gourmet (env. 200g)", de: "Gourmet-Wurstteller (ca. 200g)" }, price: 16.00 }
      ]
    },

    {
      tab: "menu",
      id: "extras",
      name: { es: "Extras", en: "Extras", fr: "Extras", de: "Extras" },
      items: [
        { name: "Pan y Roscos",  desc: { es: "Servicio de pan y roscos", en: "Bread and roscos service", fr: "Service pain et roscos", de: "Brot- und Roscos-Service" }, price: 1.00 },
        { name: "Paquete de Patatas", desc: { es: "Paquete de patatas", en: "Packet of crisps", fr: "Paquet de chips", de: "Tüte Chips" }, price: 1.50 }
      ]
    },

    // ─── CARTA DE DESAYUNOS ───
    {
      tab: "breakfast",
      id: "panes",
      name: { es: "Panes", en: "Breads", fr: "Pains", de: "Brote" },
      dualPrice: true,
      items: [
        { name: "Bollo de Pan",       desc: { es: "Bollo de pan", en: "Bread roll", fr: "Petit pain", de: "Brötchen" }, priceHalf: 1.00, priceFull: 1.50 },
        { name: "Bollo de Viena",     desc: { es: "Bollo de viena", en: "Vienna bread roll", fr: "Petit pain viennois", de: "Wiener Brötchen" }, priceHalf: 1.00, priceFull: 1.50 },
        { name: "Mollete Grande",     desc: { es: "Mollete grande", en: "Large mollete bread", fr: "Grand mollete", de: "Großes Mollete-Brötchen" }, priceFull: 1.50 },
        { name: "Mollete Pequeño",    desc: { es: "Mollete pequeño", en: "Small mollete bread", fr: "Petit mollete", de: "Kleines Mollete-Brötchen" }, priceFull: 1.20 },
        { name: "Viena Integral",     desc: { es: "Viena integral", en: "Wholemeal Vienna bread", fr: "Pain viennois complet", de: "Vollkorn-Wiener Brot" }, priceHalf: 1.00, priceFull: 1.50 },
        { name: "Torta Manteca",      desc: { es: "Torta manteca", en: "Lard flatbread", fr: "Galette au saindoux", de: "Schmalzfladen" }, priceFull: 1.20 },
        { name: "Bollo Multicereal",  desc: { es: "Bollo multicereal", en: "Multigrain roll", fr: "Petit pain multicéréales", de: "Mehrkornbrötchen" }, priceFull: 1.60 },
        { name: "Pan Sin Gluten",     desc: { es: "Pan sin gluten", en: "Gluten-free bread", fr: "Pain sans gluten", de: "Glutenfreies Brot" }, priceFull: 1.60 },
        { name: "Pan Quinoa",         desc: { es: "Pan quinoa", en: "Quinoa bread", fr: "Pain au quinoa", de: "Quinoa-Brot" }, priceFull: 1.60 },
        { name: "Pan Pasas y Nueces", desc: { es: "Pan pasas y nueces", en: "Raisin and walnut bread", fr: "Pain aux raisins et noix", de: "Rosinen-Nuss-Brot" }, priceFull: 1.60 },
        { name: "Pan Maíz",           desc: { es: "Pan maíz", en: "Corn bread", fr: "Pain au maïs", de: "Maisbrot" }, priceFull: 1.60 },
        { name: "Pan Lino",           desc: { es: "Pan lino", en: "Flaxseed bread", fr: "Pain aux graines de lin", de: "Leinsamen-Brot" }, priceFull: 1.60 }
      ]
    },

    {
      tab: "breakfast",
      id: "complementos",
      name: { es: "Complementos", en: "Toppings", fr: "Garnitures", de: "Beläge" },
      dualPrice: true,
      items: [
        { name: "Mantequilla",           desc: { es: "Mantequilla", en: "Butter", fr: "Beurre", de: "Butter" }, priceHalf: 0.30, priceFull: 0.50 },
        { name: "Mantequilla Lorenzana", desc: { es: "Mantequilla Lorenzana", en: "Lorenzana butter", fr: "Beurre Lorenzana", de: "Lorenzana-Butter" }, priceHalf: 0.50, priceFull: 1.00 },
        { name: "Tomate y Aceite",       desc: { es: "Tomate y aceite", en: "Tomato and olive oil", fr: "Tomate et huile d'olive", de: "Tomate und Olivenöl" }, priceHalf: 0.30, priceFull: 0.50 },
        { name: "Salmorejo y Aceite",    desc: { es: "Salmorejo y aceite", en: "Salmorejo and olive oil", fr: "Salmorejo et huile d'olive", de: "Salmorejo und Olivenöl" }, priceHalf: 0.30, priceFull: 0.50 },
        { name: "Pechuga de Pavo",       desc: { es: "Pechuga de pavo", en: "Turkey breast", fr: "Blanc de dinde", de: "Putenbrust" }, priceHalf: 0.50, priceFull: 1.00 },
        { name: "Jamón York",            desc: { es: "Jamón york", en: "Cooked ham", fr: "Jambon blanc", de: "Kochschinken" }, priceHalf: 0.50, priceFull: 1.00 },
        { name: "Jamón",                 desc: { es: "Jamón", en: "Cured ham", fr: "Jambon cru", de: "Schinken" }, priceHalf: 1.50, priceFull: 1.90 },
        { name: "Carne Mechá",           desc: { es: "Carne mechá", en: "Pulled pork", fr: "Effiloché de porc", de: "Pulled Pork" }, priceHalf: 1.00, priceFull: 1.50 },
        { name: "Lomo de Orza",          desc: { es: "Lomo de orza", en: "Preserved pork loin", fr: "Longe de porc confite", de: "Eingelegtes Schweinelende" }, priceHalf: 1.00, priceFull: 1.50 },
        { name: "Zurrapa de Lomo",       desc: { es: "Zurrapa de lomo", en: "Pork loin spread", fr: "Rillettes de longe de porc", de: "Schweinelende-Aufstrich" }, priceHalf: 0.50, priceFull: 1.00 },
        { name: "Iberitos",              desc: { es: "Paté, crema de york y crema de jamón", en: "Pâté, ham cream and cured ham cream", fr: "Pâté, crème de jambon blanc et crème de jambon cru", de: "Pastete, Kochschinkencreme und Schinkencreme" }, priceHalf: 0.50, priceFull: 1.00 },
        { name: "Manteca Colorá",        desc: { es: "Manteca colorá", en: "Seasoned pork lard", fr: "Saindoux épicé", de: "Gewürztes Schweineschmalz" }, priceHalf: 0.50, priceFull: 1.00 },
        { name: "Aguacate",              desc: { es: "Aguacate", en: "Avocado", fr: "Avocat", de: "Avocado" }, priceHalf: 0.50, priceFull: 1.00 },
        { name: "Queso",                 desc: { es: "Queso", en: "Cheese", fr: "Fromage", de: "Käse" }, priceHalf: 0.80, priceFull: 1.20 }
      ]
    },

    // ─── DULCES Y BEBIDAS ───
    {
      tab: "drinks",
      id: "dulces",
      name: { es: "Dulces", en: "Sweets", fr: "Douceurs", de: "Süßes" },
      items: [
        { name: "Mini Carmela",       desc: { es: "Mini carmela", en: "Mini carmela pastry", fr: "Mini carmela", de: "Mini Carmela-Gebäck" }, price: 1.00 },
        { name: "Mini Cuña",          desc: { es: "Mini cuña", en: "Mini cuña pastry", fr: "Mini cuña", de: "Mini Cuña-Gebäck" }, price: 1.00 },
        { name: "Martinito",          desc: { es: "Martinito", en: "Martinito pastry", fr: "Martinito", de: "Martinito-Gebäck" }, price: 1.00 },
        { name: "Bizcochos Maroquíes", desc: { es: "Bizcochos maroquíes", en: "Moroccan biscuits", fr: "Biscuits marocains", de: "Marokkanische Kekse" }, price: 2.50 }
      ],
      note: "seasonalSweets"
    },

    {
      tab: "drinks",
      id: "cafes",
      name: { es: "Cafés e Infusiones", en: "Coffee & Infusions", fr: "Cafés et Infusions", de: "Kaffee & Aufgüsse" },
      items: [
        { name: "Cafés",                  desc: { es: "Café", en: "Coffee", fr: "Café", de: "Kaffee" }, price: 1.40 },
        { name: "Cafés XL",               desc: { es: "Café XL", en: "Coffee XL", fr: "Café XL", de: "Kaffee XL" }, price: 1.60 },
        { name: "Café Trifásico",         desc: { es: "Café trifásico", en: "Three-phase coffee (coffee, milk, condensed milk)", fr: "Café triphasé (café, lait, lait concentré)", de: "Dreiphasen-Kaffee (Kaffee, Milch, Kondensmilch)" }, price: 1.60 },
        { name: "Carajillo",              desc: { es: "Carajillo", en: "Coffee with brandy", fr: "Café au cognac", de: "Kaffee mit Brandy" }, price: 1.60 },
        { name: "Colacao",                desc: { es: "Colacao", en: "Hot chocolate", fr: "Chocolat chaud", de: "Heiße Schokolade" }, price: 1.40 },
        { name: "Infusión",               desc: { es: "Infusión", en: "Herbal tea", fr: "Infusion", de: "Kräutertee" }, price: 1.40 },
        { name: "Infusión con Leche",     desc: { es: "Infusión con leche", en: "Herbal tea with milk", fr: "Infusion au lait", de: "Kräutertee mit Milch" }, price: 1.50 },
        { name: "Zumos",                  desc: { es: "Zumos", en: "Juices", fr: "Jus", de: "Säfte" }, price: 2.00 },
        { name: "Zumos de Naranja Natural", desc: { es: "Zumo de naranja natural", en: "Fresh orange juice", fr: "Jus d'orange frais", de: "Frisch gepresster Orangensaft" }, price: 2.00 },
        { name: "Batidos",                desc: { es: "Batidos", en: "Milkshakes", fr: "Milkshakes", de: "Milchshakes" }, price: 2.00 },
        { name: "Leche de Avena",         desc: { es: "Leche de avena (suplemento)", en: "Oat milk (supplement)", fr: "Lait d'avoine (supplément)", de: "Hafermilch (Zuschlag)" }, priceSupplement: 0.20 },
        { name: "Leche de Soja",          desc: { es: "Leche de soja (suplemento)", en: "Soy milk (supplement)", fr: "Lait de soja (supplément)", de: "Sojamilch (Zuschlag)" }, priceSupplement: 0.20 }
      ]
    }
  ]
};
