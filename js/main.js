// =================== PRODUCTOS ===================
const productos = [
     
    // Camisas      
    {   
        id: "camisa-1",
        titulo: "Camisa Casual Azul",
        imagen: [
            "https://w7.pngwing.com/pngs/972/557/png-transparent-blue-dress-shirt-t-shirt-dress-shirt-dress-shirt-tshirt-blue-image-file-formats-thumbnail.png"
        ],
        categoria: { nombre: "Camisas", id: "camisas" },
        precio: 20,
        descuento: 10,
        informacion: ["Algodón 100%", "Manga larga", "Slim fit" , "Casual" , "Ropa de hombre", "Camiseta de hombre" , "Camiseta de vestir" , "Camiseta de moda"],
        envio: "Envío Gratis",
        stock: 15,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "camisa-2",
        titulo: "Camisa Blanca Elegante",
        imagen: [
            "https://png.pngtree.com/png-clipart/20240302/original/pngtree-mens-white-formal-shirt-png-image_14463772.png",
        ],
        categoria: { nombre: "Camisas", id: "camisas" },
        precio: 20,
        descuento: 15,
        informacion: ["Poliéster", "Manga larga", "Regular fit" , "Elegante", "Ropa de hombre", "Camiseta de hombre", "Camiseta de vestir", "Camiseta de moda"],
        envio: "Envío Gratis",
        stock: 10,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "camisa-3",
        titulo: "Camisa Cuadros Rojos",
        imagen: [
            "https://e-gothiczone.com/45731-thickbox_default/camisa-hombre-roja-cuadros-negros-manga-corta.jpg"
        ],
        categoria: { nombre: "Camisas", id: "camisas" },
        precio: 25,
        descuento: 5,
        informacion: ["Algodón", "Manga corta", "Cuadros" , "Casual" , "Elegante" , "Ropa de hombre"],
        envio: "Envío Gratis",
        stock: 20,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "camisa-4",
        titulo: "Camisa Negra Formal",
        imagen: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSdma0tkrqS_eOzK9DfkgYBlSkN1oCcCohQ&s"
        ],
        categoria: { nombre: "Camisas", id: "camisas" },
        precio: 30,
        descuento: 20,
        informacion: ["Poliéster", "Manga larga", "Formal" , "Elegante" , "Ropa de Hombre"],
        envio: "Envío Gratis",
        stock: 12,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "camisa-5",
        titulo: "Camiseta Barcelona 1999-2000 Local",
        imagen: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWA3u0FBQFKmNdSebKOOMDtjUXIwYlEluvKpmZ6-1-qbWDHW_ZJqewxn13AXtX-bPRPQs&usqp=CAU"
        ],
        categoria: { nombre: "Camisas", id: "camisas" },
        precio: 70,
        descuento: 12,
        informacion: ["Algodón", "Manga larga", "Casual" , "Edición especial" , "FC Barcelona 1999" , "Retro" , "fútbol"],
        envio: "Envío Gratis",
        stock: 18,
        proveedor: "Nike Store",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "camisa-6",
        titulo: "Camiseta Retro Local Roja y Negra de AC Milan 1998/99",
        imagen: [
            "https://acdn-us.mitiendanube.com/stores/003/177/055/products/camiseta-local-retro-negra-roja-milan-1998-1999-adidas-1-544a5a43a80a798d0617115989685382-480-0.jpeg"
        ],
        categoria: { nombre: "Camisas", id: "camisas" },
        precio: 65,
        descuento: 20,
        informacion: ["Denim", "Manga larga", "Casual"],
        envio: "Envío Gratis",
        stock: 14,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "camisa-7",
        titulo: "Camiseta de anime Bleach - Ichigo Kurosaki",
        imagen: [
            "https://tutiendashoka.com/wp-content/uploads/2022/11/camisas-de-bleach-ichigo.jpg.webp"
        ],
        categoria: { nombre: "Camisas", id: "camisas" },
        precio: 16,
        informacion: ["Algodón", "Manga corta", "Anime", "Bleach" , "Ichigo Kurosaki" , "Camiseta" , "Casual" , "Ropa de anime" , "Camiseta de anime" , "Camiseta de Ichigo Kurosaki"],
        envio: "Envío Gratis",
        stock: 16,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "camisa-8",
        titulo: "Camiseta Algodon The Masters Of Anime Goku, Naruto, One Piece, One pun",
        imagen: [
            "https://www.karisma.com.co/cdn/shop/files/Themastersofanimeartazuloscuro.png?v=1688657632"
        ],
        categoria: { nombre: "Camisas", id: "camisas" },
        precio: 18,
        informacion: ["Algodón", "Slim fit", "Azul oscuro", "Manga corta", "Anime", "Goku", "Naruto", "One Piece", "One Punch" ],
        envio: "Envío Gratis",
        stock: 11,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "camisa-9",
        titulo: "Camisa Spy Family Anime",
        imagen: [
            "https://www.neko-cr.com/cdn/shop/files/spy2_533x.jpg?v=1727466627"
        ],
        categoria: { nombre: "Camisas", id: "camisas" },
        precio: 18,
        informacion: ["Algodón", "Rayas", "Manga corta", "Anime", "Spy Family", "Camiseta", "Casual", "Ropa de anime", "Camiseta de anime"],
        envio: "Envío Gratis",
        stock: 13,
        proveedor: "Tienda Anime",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "camisa-10",
        titulo: "Camiseta Manga Larga Réplica Umbro 2023 Selección El Salvador",
        imagen: [
            "https://www.prosoccer.com/cdn/shop/files/fcfaf23224ec5a85f2d852c2f855432d.webp?v=1729350512"
        ],
        categoria: { nombre: "Camisas", id: "camisas" },
        precio: 75,
        descuento: 22,
        informacion: ["Poliéster", "Estampado tropical", "Larga", "Selección El Salvador", "Umbro", "Camiseta de fútbol", "Casual", "Réplica" ],
        envio: "Envío Gratis",
        stock: 9,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },

    // Suéters
    {
        id: "sueter-1",
        titulo: "Jujutsu Kaisen Sudaderas Con Capucha anime harajuku hoddies Tiras",
        imagen: [
            "https://i5.walmartimages.com/asr/b074ff26-e5b0-4042-929f-2ea71da78327.4d82f7162f01e832188b8a267bfb3f1a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        ],
        categoria: { nombre: "Suéters", id: "sueters" },
        precio: 40,
        descuento: 10,
        informacion: ["Acrílico", "blanco", "Manga larga" , "Anime", "Jujutsu Kaisen", "Sudadera con capucha", "Casual", "Ropa de anime", "Camiseta de anime"],
        envio: "Envío Gratis",
        stock: 15,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "sueter-2",
        titulo: "Tokyo Avengers Series - Suéter de cuello redondo con estampado de anime",
        imagen: [
            "https://m.media-amazon.com/images/I/61TYmVZ9L0L.jpg"
        ],
        categoria: { nombre: "Suéters", id: "sueters" },
        precio: 60,
        descuento: 15,
        informacion: ["Lana", "gris", "Cuello redondo", "Manga larga", "Anime", "Tokyo Avengers", "Casual", "Ropa de anime", "Camiseta de anime    "],
        envio: "Envío Gratis",
        stock: 10,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "sueter-3",
        titulo: "Anime One Piece Suéter Cool Luffy Sudadera ",
        imagen: [
            "https://www.wishiny.com/sites/default/files/wishiny626445233753_main_black_1.jpg"
        ],
        categoria: { nombre: "Suéters", id: "sueters" },
        precio: 55,
        descuento: 10,
        informacion: ["Algodón", "negro", "Manga larga" , "Anime", "One Piece", "Luffy", "Sudadera", "Casual", "Ropa de anime", "sudadera de anime"],
        envio: "Envío Gratis",
        stock: 20,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "sueter-4",
        titulo: "SUETER TOTORO ANIME BLANCO",
        imagen: [
            "https://deprofundisve.com/cdn/shop/files/totoro_1_sueter.png?v=1725140874"
        ],
        categoria: { nombre: "Suéters", id: "sueters" },
        precio: 1900,
        descuento: 15,
        informacion: ["Poliéster", "Rayas", "Manga larga", "Anime", "Totoro", "Casual", "Ropa de anime", "Hoodie     de anime"],
        envio: "Envío Gratis",
        stock: 12,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "sueter-5",
        titulo: "Suéter Verde Olivo Manga Larga",
        imagen: [
            "https://i.pinimg.com/736x/24/cb/f6/24cbf6d2e9666fdda8451bab53279c0e.jpg"
        ],
        categoria: { nombre: "Suéters", id: "sueters" },
        precio: 80,
        descuento: 10,
        informacion: ["Acrílico", "Verde olivo", "Manga larga" , "Casual", "Ropa de hombre", "Hoodie de hombre", "Hoodie de moda"],
        envio: "Envío Gratis",
        stock: 18,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "sueter-6",
        titulo: "Suéter azul Navy con Capucha",
        imagen: [
            "https://eu.pangaia.com/cdn/shop/products/Organic-Cotton-Hoodie-Navy-1.png?crop=center&height=1999&v=1720190242&width=1500"
        ],
        categoria: { nombre: "Suéters", id: "sueters" },
        precio: 80,
        descuento: 10,
        informacion: ["Algodon", "azul", "Manga larga" , "Casual", "Ropa de hombre", "Hoodie de hombre", "Hoodie de moda"],
        envio: "Envío Gratis",
        stock: 14,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "sueter-7",
        titulo: "Venom Hoodies",
        imagen: [
            "https://www.youngla.com/cdn/shop/files/5128_black-wash_001_11_26_floor.jpg?v=1730156109&width=2400"
        ],
        categoria: { nombre: "Suéters", id: "sueters" },
        precio: 85,
        descuento: 10,
        informacion: ["Algodón", "Manga larga", "Color negro", "Venom", "Hoodie de moda", "Ropa de Hombre"],
        envio: "Envío Gratis",
        stock: 16,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "sueter-8",
        titulo: "Suéter Overside",
        imagen: [
            "https://www.staycoldapparel.com/cdn/shop/files/2024_AndreyLukovniko-DeadBloom-SCOH-greywash-Shop-1000x1000_Mockup-back_5000f6b5-0c5b-4d18-81e6-35eecc7b8a22.jpg?crop=center&height=600&v=1740387119&width=600"
        ],
        categoria: { nombre: "Suéters", id: "sueters" },
        precio: 90,
        descuento: 5,
        informacion: ["Algodón", "Overside", "Gris", "Hoodie", "Hoodie de Moda"],
        envio: "Envío Gratis",
        stock: 11,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "sueter-9",
        titulo: "Junior Sad Boyz Corridos Tumbados H Belicos Mexico Hoodie",
        imagen: [
            "https://endastore.com/wp-content/uploads/2023/09/Junior-Sad-Boyz-Corridos-Tumbados-H-Belicos-Mexico-Shirt_3_white-247x247.jpg"
        ],
        categoria: { nombre: "Suéters", id: "sueters" },
        precio: 100,
        descuento: 10,
        informacion: ["Algodón", "Cantante", "Manga larga", "Corridos Tumbados", "Hoodie"],
        envio: "Envío Gratis",
        stock: 13,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "sueter-10",
        titulo: "Liana Flores Merch Sudaderas con capucha ",
        imagen: [
                "https://m.media-amazon.com/images/I/51mUsogHmEL.jpg"
        ],
        categoria: { nombre: "Suéters", id: "sueters" },
        precio: 75,
        descuento: 30,
        informacion: ["Poliéster", "Estampado tropical", "Manga corta"],
        envio: "Envío Gratis",
        stock: 9,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },

    // Pantalones
    {
        id: "pantalon-1",
        titulo: "Jeans clásico de corte recto azul",
        imagen: [
            "https://tommyguatemala.vtexassets.com/arquivos/ids/477010/Jeans-clasico-de-corte-recto.jpg?v=638485894192730000    "
        ],
        categoria: { nombre: "Pantalones", id: "pantalones" },
        precio: 30,
        informacion: ["Denim", "Azul clásico", "Corte recto" , "Casual", "Hombre y mujeres"],
        envio: "Envío Gratis",
        stock: 15,
        proveedor: "Tienda Oficial",
        tallas: ["28", "30", "32", "34", "36"]
    },
    {
        id: "pantalon-2",
        titulo: "Jeans Clasico de corte recto negro",
        imagen: [
            "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1728989473-jeans-zara-670e49036b007.png?crop=1xw:1xh;center,top&resize=980:*"
        ],
        categoria: { nombre: "Pantalones", id: "pantalones" },
        precio: 30,
        informacion: ["Denim", "Negro", "Corte recto", "Casual", "Hombre y mujeres"],
        envio: "Envío Gratis",
        stock: 12,
        proveedor: "Tienda Oficial",
        tallas: ["28", "30", "32", "34", "36"]
    },
    {
        id: "pantalon-3",
        titulo: "Jeans Baggy  Azul denim",
        imagen: [
            "https://hmperu.vtexassets.com/unsafe/1280x0/center/middle/https%3A%2F%2Fhmperu.vtexassets.com%2Farquivos%2Fids%2F5586446%2FBaggy-Regular-Jeans---Azul-denim---H-M-PE.jpg%3Fv%3D638851516480670000  "
        ],
        categoria: { nombre: "Pantalones", id: "pantalones" },
        precio: 45,
        informacion: ["Denim", "Corte Holgado", "Baggy", "estilo", "Moderno"],
        envio: "Envío Gratis",
        stock: 10,
        proveedor: "Tienda Oficial",
        tallas: ["28", "30", "32", "34", "36"]
    },
    {
        id: "pantalon-4",
        titulo: "Jeans Baggy celeste",
        imagen: [
            "https://photos6.spartoo.es/photos/266/26667112/26667112_1200_A.jpg "
        ],
        categoria: { nombre: "Pantalones", id: "pantalones" },
        precio: 40,
        descuento: 25,
        informacion: ["Estilo", "Baggy", "Moderno", "Corte Holgado", "Casual"],
        envio: "Envío Gratis",
        stock: 9,
        proveedor: "Tienda Oficial",
        tallas: ["28", "30", "32", "34", "36"]
    },
    {
        id: "pantalon-5",
        titulo: "Cargo Jeans - Gris oscuro",
        imagen: [
            "https://image.hm.com/assets/hm/29/76/2976c7f53c7b92120868f8e707754e0595679acb.jpg?imwidth=2160 "
        ],
        categoria: { nombre: "Pantalones", id: "pantalones" },
        precio: 60,
        descuento: 10,
        informacion: ["Poliéster", "Gris", "Cargo", "Casual", "Estilo", "Moderno"],
        envio: "Envío Gratis",
        stock: 14,
        proveedor: "Tienda Oficial",
        tallas: ["28", "30", "32", "34", "36"]
    },
    {
        id: "pantalon-6",
        titulo: "Pantalon cargo en denim",
        imagen: [
            "https://image.hm.com/assets/hm/a5/36/a536c7179e1e22a05cfa80f5455883673d5e9d66.jpg?imwidth=2160 "
        ],
        categoria: { nombre: "Pantalones", id: "pantalones" },
        precio: 60,
        descuento: 20,
        informacion: ["Poliéster", "Azul", "Azul", "Cargo", "Casual", "Estilo", "Moderno"],
        envio: "Envío Gratis",
        stock: 8,
        proveedor: "Tienda Oficial",
        tallas: ["28", "30", "32", "34", "36"]
    },
    {
        id: "pantalon-7",
        titulo: "Pants Nike 2000S Negro",
        imagen: [
            "https://peeces.fr/cdn/shop/files/119_13dd80c1-a623-4624-aed4-c51aa8885d40.png?v=1730289283 "
        ],
        categoria: { nombre: "Pantalones", id: "pantalones" },
        precio: 70,
        descuento: 15,
        informacion: ["Pants", "Negro", "Slim fit", "Deportivo", "Casual", "Moda", "Estilo", "Moderno"],
        envio: "Envío Gratis",
        stock: 11,
        proveedor: "Tienda Oficial",
        tallas: ["28", "30", "32", "34", "36"]
    },
    {
        id: "pantalon-8",
        titulo: "Vintage Nike Trackpants Baggy",
        imagen: [
            "https://1asales.ch/cdn/shop/files/IMG_3626.jpg?v=1743283570&width=1000 "
        ],
        categoria: { nombre: "Pantalones", id: "pantalones" },
        precio: 75,
        informacion: ["Pants", "Azul", "Baggy", "Slim - Fit", "Deportivo", "Casual", "Moda", "Estilo", "Moderno"],
        envio: "Envío Gratis",
        stock: 10,
        proveedor: "Tienda Oficial",
        tallas: ["28", "30", "32", "34", "36"]
    },
    {
        id: "pantalon-9",
        titulo: "Vintage Adidas Track Pant",
        imagen: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTplUENoaCOk8nmb6_CWxZGYn-aKRRaiGyn0Q&s   "
        ],
        categoria: { nombre: "Pantalones", id: "pantalones" },
        precio: 75,
        informacion: ["Pants", "Azul", "Baggy", "Slim - Fit", "Deportivo", "Casual", "Moda", "Estilo", "Moderno"],
        envio: "Envío Gratis",
        stock: 13,
        proveedor: "Tienda Oficial",
        tallas: ["28", "30", "32", "34", "36"]
    },
    {
        id: "pantalon-10",
        titulo: "Vintage Adidas Pants",
        imagen: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_zIL7sJ_cVFTmFZrlRDaz014Nj7PpPntL026ptt0cpRmse3wfqB247_rWji5ssbe391E&usqp=CAU   "
        ],
        categoria: { nombre: "Pantalones", id: "pantalones" },
        precio: 75,
        descuento: 15,
        informacion: ["Pants", "Azul", "Baggy", "Slim - Fit", "Deportivo", "Casual", "Moda", "Estilo", "Moderno"],
        envio: "Envío Gratis",
        stock: 9,
        proveedor: "Tienda Oficial",
        tallas: ["28", "30", "32", "34", "36"]
    },
   // Ropa de Niño
   {
        id: "nino-1",
        titulo: "Pantalones Cortos de Niño",
        imagen: [
            "https://assets.theplace.com/image/upload/t_pdp_img_m,f_auto,q_auto/v1/ecom/assets/products/tcp/3037649/3037649_338I.png"
        ],
        categoria: { nombre: "Ropa de Niño", id: "nino" },
        precio: 15,
        informacion: ["Algodón", "Manga corta", "Casual", "Ropa de niño", "Pantalones cortos"],
        envio: "Envío Gratis",
        stock: 20,
        proveedor: "Tienda Oficial",
        tallas: ["2 años", "3 años", "4 años", "5 años", "6 años"]
    },
    {
        id: "nino-2",
        titulo: "Camiseta de Minecraft para Niño",
        imagen: [
            "https://media.game.es/COVERV2/3D_L/103/103579.png"
        ],
        categoria: { nombre: "Ropa de Niño", id: "nino" },
        precio: 12,
        informacion: ["Algodón", "Manga corta", "Minecraft", "Casual", "Ropa de niño"],
        envio: "Envío Gratis",
        stock: 25,
        proveedor: "Tienda Oficial",
        tallas: ["2 años", "3 años", "4 años", "5 años", "6 años"]
    },
    {
        id: "nino-3",
        titulo: "Sudadera con Capucha para Niño",
        imagen: [
            "https://static.zara.net/assets/public/b91e/b06b/681c46358d76/64ed32bc2a86/06208661807-e1/06208661807-e1.jpg?ts=1750318885660&w=352&f=auto"
        ],
        categoria: { nombre: "Ropa de Niño", id: "nino" },
        precio: 20,
        informacion: ["Poliéster", "Capucha", "Casual", "Ropa de niño"],
        envio: "Envío Gratis",
        stock: 15,
        proveedor: "Tienda Oficial",
        tallas: ["2 años", "3 años", "4 años", "5 años", "6 años"]
    },
    {
        id: "nino-4",
        titulo: "Pantalones celestes de Chándal para Niño",
        imagen: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBdxmqx3D7XcAF6EiGxPlB35-QyxSkiokV-A&s"
        ],
        categoria: { nombre: "Ropa de Niño", id: "nino" },
        precio: 18,
        informacion: ["Algodón", "Manga larga", "Casual", "Ropa de niño"],
        envio: "Envío Gratis",
        stock: 30,
        proveedor: "Tienda Oficial",
        tallas: ["2 años", "3 años", "4 años", "5 años", "6 años"]
    },
    {
        id: "nino-5",
        titulo: "Chaqueta de Invierno para Niño",
        imagen: [
            "https://data.mecshopping.it/imgprodotto/chaqueta-de-invierno-para-nino-con-capucha-e-interior-de-pelo-ecologico_736841.jpg"
        ],
        categoria: { nombre: "Ropa de Niño", id: "nino" },
        precio: 35,
        informacion: ["Poliéster", "Forro polar", "Casual", "Ropa de niño"],
        envio: "Envío Gratis",
        stock: 10,
        proveedor: "Tienda Oficial",
        tallas: ["2 años", "3 años", "4 años", "5 años", "6 años"]
    },
    {
        id: "nino-6",
        titulo: "Camiseta de Dinosaurio para Niño",
        imagen: [
            "https://media.vertbaudet.es/Pictures/vertbaudet/257306/camiseta-con-dinosaurio-gigante-para-nino.jpg"
        ],
        categoria: { nombre: "Ropa de Niño", id: "nino" },
        precio: 14,
        informacion: ["Algodón", "Manga corta", "Dinosaurio", "Casual", "Ropa de niño"],
        envio: "Envío Gratis",
        stock: 22,
        proveedor: "Tienda Oficial",
        tallas: ["2 años", "3 años", "4 años", "5 años", "6 años"]
    },
    {
        id: "nino-7",
        titulo: "Pijama de Superhéroe para Niño",
        imagen: [
            "https://i5.walmartimages.com/asr/e496d557-3da5-4ca9-b123-0604c7471add.08ff7b3c84abdb3ed66ad893bacb02b3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        ],
        categoria: { nombre: "Ropa de Niño", id: "nino" },
        precio: 22,
        informacion: ["Algodón", "Manga larga", "Superhéroe", "Casual", "Ropa de niño"],
        envio: "Envío Gratis",
        stock: 18,
        proveedor: "Tienda Oficial",
        tallas: ["2 años", "3 años", "4 años", "5 años", "6 años"]
    },
    {
        id: "nino-8",
        titulo: "Gorro de Invierno para Niño",
        imagen: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRg4623O62aUSvFgqOHj-W2ZM6Qc4dBt-E9A&s"
        ],
        categoria: { nombre: "Ropa de Niño", id: "nino" },
        precio: 10,
        informacion: ["Acrílico", "Forro polar", "Casual", "Ropa de niño"],
        envio: "Envío Gratis",
        stock: 20,
        proveedor: "Tienda Oficial",
        tallas: ["2 años", "3 años", "4 años", "5 años", "6 años"]
    },
    {
        id: "nino-9",
        titulo: "Botas de Lluvia para Niño",
        imagen: [
            "https://m.media-amazon.com/images/I/61qHYjTX00S.jpg"
        ],
        categoria: { nombre: "Ropa de Niño", id: "nino" },
        precio: 25,
        informacion: ["Goma", "Impermeables", "Casual", "Ropa de niño"],
        envio: "Envío Gratis",
        stock: 15,
        proveedor: "Tienda Oficial",
        tallas: ["2 años", "3 años", "4 años", "5 años", "6 años"]
    },
    {
        id: "nino-10",
        titulo: "Chaqueta de Cuero para Niño",
        imagen: [
            "https://i.ebayimg.com/thumbs/images/g/jk4AAeSweGhnm471/s-l1200.jpg"
        ],
        categoria: { nombre: "Ropa de Niño", id: "nino" },
        precio: 50,
        informacion: ["Cuero sintético", "Manga larga", "Casual", "Ropa de niño"],
        envio: "Envío Gratis",
        stock: 8,
        proveedor: "Tienda Oficial",
        tallas: ["2 años", "3 años", "4 años", "5 años", "6 años"]
    },
    // Ropa de Mujer
    {
        id: "mujer-1",
        titulo: "Vestido de Verano Floral",
        imagen: [
            "https://tse3.mm.bing.net/th/id/OIP.quL1x4cDnFmYiF0aeU0r4wHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
        ],
        categoria: { nombre: "Ropa de Mujer", id: "mujer" },
        precio: 30,
        informacion: ["Algodón", "Manga corta", "Floral", "Casual", "Ropa de mujer"],
        envio: "Envío Gratis",
        stock: 10,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "mujer-2",
        titulo: "Blusa Elegante de Seda",
        imagen: [
            "https://i.pinimg.com/originals/4d/c8/0f/4dc80febccc02769ad5f132d51f0ae55.jpg"
        ],
        categoria: { nombre: "Ropa de Mujer", id: "mujer" },
        precio: 25,
        informacion: ["Seda", "Manga larga", "Elegante", "Ropa de mujer"],
        envio: "Envío Gratis",
        stock: 15,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "mujer-3",
        titulo: "Pantalón con tobillos ajustados",
        imagen: [
            "https://image.hm.com/assets/hm/83/dc/83dc21be5d5121e67943e771277e7b599b093830.jpg?imwidth=820"
        ],
        categoria: { nombre: "Ropa de Mujer", id: "mujer" },
        precio: 40,
        informacion: ["Mezclilla", "Ajustados", "Casual", "Ropa de mujer"],
        envio: "Envío Gratis",
        stock: 20,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "mujer-4",
        titulo: "Chaqueta de Cuero Negra",
        imagen: [
            "https://tse1.mm.bing.net/th/id/OIP.WSG5bV8P2abNIWjmBhVElwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
        ],
        categoria: { nombre: "Ropa de Mujer", id: "mujer" },
        precio: 60,
        informacion: ["Cuero sintético", "Manga larga", "Casual", "Ropa de mujer"],
        envio: "Envío Gratis",
        stock: 12,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "mujer-5",
        titulo: "Falda Midi de Lino",
        imagen: [
            "https://th.bing.com/th/id/OIP.FzH5sG8xM6NzVH57PvObtwHaLH?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
        ],
        categoria: { nombre: "Ropa de Mujer", id: "mujer" },
        precio: 35,
        informacion: ["Lino", "Midi", "Casual", "Ropa de mujer"],
        envio: "Envío Gratis",
        stock: 18,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "mujer-6",
        titulo: "Sudadera con Capucha Rosa",
        imagen: [
            "https://static.kiabi.es/images/sudadera-con-capucha-rosa-yr104_3_frb1.jpg"
        ],
        categoria: { nombre: "Ropa de Mujer", id: "mujer" },
        precio: 28,
        informacion: ["Algodón", "Manga larga", "Casual", "Ropa de mujer"],
        envio: "Envío Gratis",
        stock: 14,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "mujer-7",
        titulo: "Blusa de Encaje Blanca",
        imagen: [
            "https://tse1.mm.bing.net/th/id/OIP.SuX0AKdpQF4kC6GHoH_Y1AHaK7?rs=1&pid=ImgDetMain&o=7&rm=3"
        ],
        categoria: { nombre: "Ropa de Mujer", id: "mujer" },
        precio: 22,
        informacion: ["Encaje", "Manga corta", "Elegante", "Ropa de mujer"],
        envio: "Envío Gratis",
        stock: 16,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "mujer-8",
        titulo: "Vestido de Verano",
        imagen: [
            "https://th.bing.com/th/id/OIP.l5tVC0TWn8WtlSvcrwAKGgHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7"
        ],
        categoria: { nombre: "Ropa de Mujer", id: "mujer" },
        precio: 50,
        informacion: ["Algodón", "Manga corta", "Floral", "Ropa de mujer"],
        envio: "Envío Gratis",
        stock: 10,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "mujer-9",
        titulo: "Pantalones de Chándal Gris",
        imagen: [
            "https://tse3.mm.bing.net/th/id/OIP.2AtDnKO8SflIKXQp1gZPEgHaI-?rs=1&pid=ImgDetMain&o=7&rm=3"
        ],
        categoria: { nombre: "Ropa de Mujer", id: "mujer" },
        precio: 30,
        informacion: ["Algodón", "Manga larga", "Casual", "Ropa de mujer"],
        envio: "Envío Gratis",
        stock: 20,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "mujer-10",
        titulo: "Chaqueta de Invierno Azul",
        imagen: [
            "https://img01.ztat.net/article/spp-media-p1/2710f0bf2b75490dbbf108d1ac247dc4/3aa323e9e1f34340ae554c18b3fe9ea2.jpg?imwidth=300&filter=packshot"
        ],
        categoria: { nombre: "Ropa de Mujer", id: "mujer" },
        precio: 70,
        informacion: ["Poliéster", "Forro polar", "Casual", "Ropa de mujer"],
        envio: "Envío Gratis",
        stock: 8,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    // Ropa de Hombre
    {
        id: "hombre-1",
        titulo: "Camisa de Algodón Azul",
        imagen: [
            "https://static.kiabi.es/images/camisa-oxford-azul-aie24_2_frb1.jpg"
        ],
        categoria: { nombre: "Ropa de Hombre", id: "hombre" },
        precio: 25,
        informacion: ["Algodón", "Manga larga", "Casual", "Ropa de hombre"],
        envio: "Envío Gratis",
        stock: 15,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "hombre-2",
        titulo: "Pantalones de Mezclilla Oscuros",
        imagen: [
            "https://th.bing.com/th/id/OIP.r15eMa_ADZZinelwu0e6FgHaJ4?w=189&h=252&c=7&r=0&o=5&pid=1.7"
        ],
        categoria: { nombre: "Ropa de Hombre", id: "hombre" },
        precio: 40,
        informacion: ["Mezclilla", "Casual", "Ropa de hombre"],
        envio: "Envío Gratis",
        stock: 20,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "hombre-3",
        titulo: "Sudadera con Capucha Negra",
        imagen: [
            "https://tse3.mm.bing.net/th/id/OIP.zZFrqPvoVX2wNK4wN_pceAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
        ],
        categoria: { nombre: "Ropa de Hombre", id: "hombre" },
        precio: 30,
        informacion: ["Algodón", "Manga larga", "Casual", "Ropa de hombre"],
        envio: "Envío Gratis",
        stock: 12,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "hombre-4",
        titulo: "Chaqueta de Cuero Marrón",
        imagen: [
            "https://tse3.mm.bing.net/th/id/OIP.RRa3fbHHbzckscRkFMf1FQAAAA?w=416&h=500&rs=1&pid=ImgDetMain&o=7&rm=3"
        ],
        categoria: { nombre: "Ropa de Hombre", id: "hombre" },
        precio: 60,
        informacion: ["Cuero sintético", "Manga larga", "Casual", "Ropa de hombre"],
        envio: "Envío Gratis",
        stock: 10,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "hombre-5",
        titulo: "Pantalones Chinos Beige",
        imagen: [
            "https://tse2.mm.bing.net/th/id/OIP.nDabdPy72JJ4ycstcEk9uwHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3"
        ],
        categoria: { nombre: "Ropa de Hombre", id: "hombre" },
        precio: 35,
        informacion: ["Algodón", "Casual", "Ropa de hombre"],
        envio: "Envío Gratis",
        stock: 18,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "hombre-6",
        titulo: "Camiseta de Algodón Gris",
        imagen: [
            "https://tse3.mm.bing.net/th/id/OIP.ZG3Xii4xRoaak6ayeVSlzgHaJD?w=717&h=877&rs=1&pid=ImgDetMain&o=7&rm=3"
        ],
        categoria: { nombre: "Ropa de Hombre", id: "hombre" },
        precio: 20,
        informacion: ["Algodón", "Manga corta", "Casual", "Ropa de hombre"],
        envio: "Envío Gratis",
        stock: 25,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "hombre-7",
        titulo: "Camisa de Rayas Blanca y Azul",
        imagen: [
            "https://tse4.mm.bing.net/th/id/OIP.GdQBLxVwzlPO7qMVp4k5gAHaJC?rs=1&pid=ImgDetMain&o=7&rm=3"
        ],
        categoria: { nombre: "Ropa de Hombre", id: "hombre" },
        precio: 28,
        informacion: ["Algodón", "Manga larga", "Casual", "Ropa de hombre"],
        envio: "Envío Gratis",
        stock: 15,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "hombre-8",
        titulo: "Pantalones Cortos de Algodón",
        imagen: [
            "https://tse3.mm.bing.net/th/id/OIP.Qpr9boGxW1LKaSnQwHAbzQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
        ],
        categoria: { nombre: "Ropa de Hombre", id: "hombre" },
        precio: 22,
        informacion: ["Algodón", "Manga corta", "Casual", "Ropa de hombre"],
        envio: "Envío Gratis",
        stock: 20,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "hombre-9",
        titulo: "Chaqueta de Invierno Azul",
        imagen: [
            "https://assets.christiandior.com/is/image/diorprod/943C449A4462C595_E01-1?$default_GH$&crop=424,152,1151,1552&bfc=on&qlt=85"
        ],
        categoria: { nombre: "Ropa de Hombre", id: "hombre" },
        precio: 70,
        informacion: ["Poliéster", "Forro polar", "Casual", "Ropa de hombre"],
        envio: "Envío Gratis",
        stock: 8,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "hombre-10",
        titulo: "Camiseta de Manga Larga Negra",
        imagen: [
            "https://www.asuntopolera.com/wp-content/uploads/2022/07/ZZ62C04068.jpg"
        ],
        categoria: { nombre: "Ropa de Hombre", id: "hombre" },
        precio: 18,
        informacion: ["Algodón", "Manga larga", "Casual", "Ropa de hombre"],
        envio: "Envío Gratis",
        stock: 12,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    // Ropa de Niña
    {
        id: "nina-1",
        titulo: "Vestido de Princesa Rosa",
        imagen: [
            "https://tse2.mm.bing.net/th/id/OIP.j87-Q9rXrk6xEsIbrUaGsgHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3"
        ],
        categoria: { nombre: "Ropa de Niña", id: "nina" },
        precio: 30,
        informacion: ["Algodón", "Manga corta", "Casual", "Ropa de niña"],
        envio: "Envío Gratis",
        stock: 10,
        proveedor: "Tienda Oficial",
        tallas: ["2 años", "3 años", "4 años", "5 años", "6 años"]
    },
    {
        id: "nina-2",
        titulo: "Blusa de Encaje Blanca",
        imagen: [
            "https://limafashionkids.pe/wp-content/uploads/2023/03/IMG_20-1.jpg"
        ],
        categoria: { nombre: "Ropa de Niña", id: "nina"
        },
        precio: 25,
        informacion: ["Encaje", "Manga corta", "Elegante", "Ropa de niña"],
        envio: "Envío Gratis",
        stock: 15,
        proveedor: "Tienda Oficial",
        tallas: ["2 años", "3 años", "4 años", "5 años", "6 años"]
    },
    {
        id: "nina-3",
        titulo: "Pantalones de Mezclilla Claros",
        imagen: [
            "https://resources.claroshop.com/medios-plazavip/fotos/productos_sears1/original/3593162.jpg"
        ],
        categoria: { nombre: "Ropa de Niña", id: "nina" },
        precio: 40,
        informacion: ["Mezclilla", "Casual", "Ropa de niña"],               
        envio: "Envío Gratis",
        stock: 20,
        proveedor: "Tienda Oficial",
        tallas: ["2 años", "3 años", "4 años", "5 años", "6 años"]
    },
    {
        id: "nina-4",
        titulo: "Chaqueta de Cuero Rosa",
        imagen: [
            "https://th.bing.com/th/id/R.73db1ffefbcee41911d10b5c328de704?rik=cUvRADnodqlIYw&pid=ImgRaw&r=0"
        ],
        categoria: { nombre: "Ropa de Niña", id: "nina" },
        precio: 60,
        informacion: ["Cuero sintético", "Manga larga", "Casual", "Ropa de niña"],
        envio: "Envío Gratis",
        stock: 10,
        proveedor: "Tienda Oficial",
        tallas: ["2 años", "3 años", "4 años", "5 años", "6 años"]
    },
    {
        id: "nina-5",               
        titulo: "Falda de Tul Rosa",
        imagen: [
            "https://tse2.mm.bing.net/th/id/OIP.zTwZ7a2u-ORsSQXKMHovpQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
        ],
        categoria: { nombre: "Ropa de Niña", id: "nina" },
        precio: 35,
        informacion: ["Tul", "Midi", "Casual", "Ropa de niña"],     
        envio: "Envío Gratis",
        stock: 18,
        proveedor: "Tienda Oficial",
        tallas: ["2 años", "3 años", "4 años", "5 años", "6 años"]
    },
    {
        id: "nina-6",
        titulo: "Sudadera con Capucha Rosa",
        imagen: [
            "https://tse1.mm.bing.net/th/id/OIP.-BNYWIB9qmbpCljm0aAYNAHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3"
        ],
        categoria: { nombre: "Ropa de Niña", id: "nina" },
        precio: 28,
        informacion: ["Algodón", "Manga larga", "Casual", "Ropa de niña"],
        envio: "Envío Gratis",
        stock: 14,
        proveedor: "Tienda Oficial",        
        tallas: ["2 años", "3 años", "4 años", "5 años", "6 años"]
    },
    {
        id: "nina-7",   
        titulo: "Camiseta de Unicornio",
        imagen: [   
            "https://tse4.mm.bing.net/th/id/OIP.z3fiN7t77JPHCFRe-sdpSQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
        ],
        categoria: { nombre: "Ropa de Niña", id: "nina" },
        precio: 22,
        informacion: ["Algodón", "Manga corta", "Unicornio", "Casual", "Ropa de niña"],
        envio: "Envío Gratis",
        stock: 20,
        proveedor: "Tienda Oficial",
        tallas: ["2 años", "3 años", "4 años", "5 años", "6 años"]
    },
    {
        id: "nina-8",
        titulo: "Pantalones Cortos de Algodón",
        imagen: [
            "https://th.bing.com/th/id/R.a04f45aa13757cf3e0dc8533755c6eb2?rik=%2fdY254Jc23bHBA&pid=ImgRaw&r=0"
        ],
        categoria: { nombre: "Ropa de Niña", id: "nina" },
        precio: 22,
        informacion: ["Algodón", "Manga corta", "Casual", "Ropa de niña"],
        envio: "Envío Gratis",
        stock: 20,
        proveedor: "Tienda Oficial",        
        tallas: ["2 años", "3 años", "4 años", "5 años", "6 años"]
    },
    {
        id: "nina-9",
        titulo: "Chaqueta de Invierno Rosa",
        imagen: [                       
            "https://www.lolitamoda.com/uploads/photo/image/177641/thumb_K028525_1.JPG"
        ],
        categoria: { nombre: "Ropa de Niña", id: "nina" },
        precio: 70,
        informacion: ["Poliéster", "Forro polar", "Casual", "Ropa de niña"],
        envio: "Envío Gratis",
        stock: 8,
        proveedor: "Tienda Oficial",
        tallas: ["2 años", "3 años", "4 años", "5 años", "6 años"]
    },
    {
        id: "nina-10",                      
        titulo: "Camiseta de Manga Larga Blanca",
        imagen: [
            "https://camisetas.cl/wp-content/uploads/2022/08/7-1-scaled.jpg"
        ],
        categoria: { nombre: "Ropa de Niña", id: "nina" },
        precio: 18,     
        informacion: ["Algodón", "Manga larga", "Casual", "Ropa de niña"],  
        envio: "Envío Gratis",
        stock: 12,
        proveedor: "Tienda Oficial",        
        tallas: ["2 años", "3 años", "4 años", "5 años", "6 años"]
    },
];

// Agrega productos de niño, mujer, hombre, niña

// =================== TIENDA EN LÍNEA ===================
document.addEventListener('DOMContentLoaded', function() {
    const usuario = JSON.parse(localStorage.getItem('usuario_registrado'));
    const nombreUsuario = document.getElementById('nombre-usuario');
    const userMenu = document.getElementById('user-menu');

    const infoUser = document.querySelector('.info-user');

    if (infoUser) {
        if (usuario && usuario.usuario) {
            // Si hay usuario logueado, muestra solo el menú de usuario
            infoUser.innerHTML = `
                <div class="user-dropdown">
                    <button class="user-btn">
                        <i class="bi bi-person-circle"></i> ${usuario.usuario} <i class="bi bi-caret-down-fill"></i>
                    </button>
                    <div class="user-menu">
                        <a href="mis-datos.html"><i class="bi bi-person-lines-fill"></i> Mi cuenta</a>
                        ${usuario.usuario === "admin" ? `<a href="admin.html"><i class="bi bi-shield-lock"></i> Panel Admin</a>` : ""}
                        <a href="#" id="cerrar-sesion"><i class="bi bi-box-arrow-right"></i> Cerrar sesión</a>
                    </div>
                </div>
                <a href="#">Mis Compras</a>
                <a href="carrito.html">
                    <i class="bi bi-cart icono-carrito"></i>
                    <span class="num-en-carrito" id="num-en-carrito">0</span>
                </a>
            `;
            document.getElementById('cerrar-sesion').onclick = function(e) {
                e.preventDefault();
                localStorage.removeItem('usuario_registrado');
                window.location.reload();
            };

            // Dropdown toggle
            const userBtn = infoUser.querySelector('.user-btn');
            const userMenu = infoUser.querySelector('.user-menu');
            userBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                userMenu.classList.toggle('show');
            });
            document.addEventListener('click', function() {
                userMenu.classList.remove('show');
            });
        } else {
            // Si NO hay usuario logueado, muestra los botones de crear cuenta e ingresar
            infoUser.innerHTML = `
                <a href="login.html">Creá tu cuenta</a>
                <a href="login.html">Ingresá</a>
                <a href="#">Mis Compras</a>
                <a href="carrito.html">
                    <i class="bi bi-cart icono-carrito"></i>
                    <span class="num-en-carrito" id="num-en-carrito">0</span>
                </a>
            `;
        }
    }

    if (usuario && usuario.usuario) {
        nombreUsuario.textContent = usuario.usuario;

        let menuHtml = `
            <a href="mis-datos.html"><i class="bi bi-person-lines-fill"></i> Mi cuenta</a>
        `;
        if (usuario.usuario === "admin") {
            menuHtml += `
                <a href="admin.html"><i class="bi bi-shield-lock"></i> Panel Admin</a>
            `;
        }
        menuHtml += `
            <a href="#" id="cerrar-sesion"><i class="bi bi-box-arrow-right"></i> Cerrar sesión</a>
        `;
        userMenu.innerHTML = menuHtml;

        document.getElementById('cerrar-sesion').onclick = function(e) {
            e.preventDefault();
            localStorage.removeItem('usuario_registrado');
            window.location.reload();
        };
    } else {
        nombreUsuario.textContent = "Invitado";
        userMenu.innerHTML = `
            <a href="login.html"><i class="bi bi-box-arrow-in-right"></i> Ingresá</a>
            <a href="login.html"><i class="bi bi-person-plus"></i> Creá tu cuenta</a>
        `;
    }
});

// Mostrar usuario/admin logueado en el header de TODAS las páginas
document.addEventListener('DOMContentLoaded', function() {
    const infoUser = document.getElementById('info-user-header');
    const usuario = JSON.parse(localStorage.getItem('usuario_registrado'));

    if (infoUser) {
        if (usuario && usuario.usuario) {
            infoUser.innerHTML = `
                <div class="user-dropdown">
                    <button class="user-btn">
                        <i class="bi bi-person-circle"></i> ${usuario.usuario} <i class="bi bi-caret-down-fill"></i>
                    </button>
                    <div class="user-menu">
                        <a href="mis-datos.html"><i class="bi bi-person-lines-fill"></i> Mi cuenta</a>
                        ${usuario.usuario === "admin" ? `<a href="admin.html"><i class="bi bi-shield-lock"></i> Panel Admin</a>` : ""}
                        <a href="#" id="cerrar-sesion"><i class="bi bi-box-arrow-right"></i> Cerrar sesión</a>
                    </div>
                </div>
                <a href="#">Mis Compras</a>
                <a href="carrito.html">
                    <i class="bi bi-cart icono-carrito"></i>
                    <span class="num-en-carrito" id="num-en-carrito">0</span>
                </a>
            `;
            document.getElementById('cerrar-sesion').onclick = function(e) {
                e.preventDefault();
                localStorage.removeItem('usuario_registrado');
                window.location.reload();
            };

            // Dropdown toggle
            const userBtn = infoUser.querySelector('.user-btn');
            const userMenu = infoUser.querySelector('.user-menu');
            userBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                userMenu.classList.toggle('show');
            });
            document.addEventListener('click', function() {
                userMenu.classList.remove('show');
            });
        } else {
            infoUser.innerHTML = `
                <a href="login.html">Creá tu cuenta</a>
                <a href="login.html">Ingresá</a>
                <a href="#">Mis Compras</a>
                <a href="carrito.html">
                    <i class="bi bi-cart icono-carrito"></i>
                    <span class="num-en-carrito" id="num-en-carrito">0</span>
                </a>
            `;
        }
    }
});

// Función para mostrar productos en la página principal
// Función para mostrar productos (recibe array de productos)
function mostrarProductos(productosAMostrar) {
    const contenedor = document.getElementById('contenedor-productos');
    contenedor.innerHTML = '';

    if (!Array.isArray(productosAMostrar) || productosAMostrar.length === 0) {
        contenedor.innerHTML = '<p>No hay productos disponibles.</p>';
        return;
    }

    productosAMostrar.forEach(producto => {
        const imagenSrc = (producto.imagen && producto.imagen.length > 0) ? producto.imagen[0] : 'ruta/a/imagen-por-defecto.jpg';
        const descuentoHtml = producto.descuento ? `<span class="descuento">${producto.descuento}% OFF</span>` : '';

        contenedor.innerHTML += `
            <div class="producto" data-id="${producto.id}" style="cursor:pointer;">
                <img class="producto-imagen" src="${imagenSrc}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <span class="producto-precio">$${producto.precio}</span>
                    ${descuentoHtml}
                    <span class="producto-tipo-envio">${producto.envio}</span>
                </div>
            </div>
        `;
    });

    // Evento delegado para click en producto
    contenedor.onclick = function(e) {
        const card = e.target.closest('.producto');
        console.log("Click en producto:", card);

        if (card) {
            const id = card.getAttribute('data-id');
            console.log("ID del producto clicado:", id);

            const productoSeleccionado = obtenerProductosParaMostrar().find(p => p.id == id);
            console.log("Producto encontrado:", productoSeleccionado);

            if (productoSeleccionado) {
                localStorage.setItem("producto_seleccionado", JSON.stringify(productoSeleccionado));

                // 👇 Aquí está la línea que preguntaste:
                console.log("Guardado en localStorage:", localStorage.getItem("producto_seleccionado"));

                window.location.href = "ordenar-producto.html";
            } else {
                alert("Producto no encontrado.");
            }
    }
}
    

}
// Función para filtrar productos por categoría
function filtrarProductos(categoria) {
    const productosMostrar = obtenerProductosParaMostrar();
    let productosFiltrados = [];

    if (categoria === 'todos') {
        productosFiltrados = productosMostrar;
    } else {
        productosFiltrados = productosMostrar.filter(p => {
            if (typeof p.categoria === "string") {
                return p.categoria === categoria;
            }
            return p.categoria.id === categoria;
        });
    }
    mostrarProductos(productosFiltrados);

    const tituloSeccion = document.getElementById('titulo-seccion');
    if (tituloSeccion) {
        tituloSeccion.textContent = categoria === 'todos' ? 'Todos los productos' : categoria.charAt(0).toUpperCase() + categoria.slice(1);
    }
}

// Obtener productos desde localStorage o array por defecto, asegurando id único y categoría consistente
function obtenerProductosParaMostrar() {
    const productosAdmin = JSON.parse(localStorage.getItem('productos_admin'));
    if (productosAdmin && Array.isArray(productosAdmin) && productosAdmin.length > 0) {
        return productosAdmin.map((p, idx) => ({
            ...p,
            id: p.id || `admin-prod-${idx}`, 
            categoria: typeof p.categoria === "string"
                ? { nombre: p.categoria.charAt(0).toUpperCase() + p.categoria.slice(1), id: p.categoria }
                : p.categoria
        }));
    }
    return productos.map((p, idx) => ({
        ...p,
        id: p.id || `prod-${idx}`
    }));
}

// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const index = carrito.findIndex(item => item.id === producto.id);

    if (index !== -1) {
        carrito[index].cantidad = (carrito[index].cantidad || 1) + 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarNumeroCarrito();
}

// Actualiza el número de productos en el carrito
function actualizarNumeroCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const num = carrito.reduce((acc, prod) => acc + (prod.cantidad || 1), 0);
    const badge = document.getElementById('num-en-carrito');
    if (badge) badge.textContent = num;
}

document.addEventListener('DOMContentLoaded', () => {
    // Mostrar todos los productos al cargar
    if (typeof productos !== 'undefined' && productos.length > 0) {
        filtrarProductos('todos');

        // Activar botón 'todos' si existe
        const botonTodos = document.getElementById('todos');
        if (botonTodos) {
            botonTodos.classList.add('active');
        }
    } else {
        mostrarProductos([]);
    }

    // Manejar botones de categoría
    const botonesCategoria = document.querySelectorAll('.boton-categoria');
    botonesCategoria.forEach(boton => {
        boton.addEventListener('click', function() {
            // Quitar clase active de todos
            botonesCategoria.forEach(b => b.classList.remove('active'));
            // Agregar clase active al actual
            this.classList.add('active');
            // Filtrar según id
            filtrarProductos(this.id);
        });
    });

    // Inicializar número del carrito
    actualizarNumeroCarrito();

    // Agregar eventos a botones de agregar al carrito (si los hay)
    document.querySelectorAll('.btn-agregar-carrito').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.dataset.id;
            const producto = obtenerProductosParaMostrar().find(p => p.id == id);
            if (producto) agregarAlCarrito(producto);
        });
    });
});

// =================== PRODUCTOS ===================