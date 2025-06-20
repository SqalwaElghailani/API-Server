const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors({  origin: 'http://localhost:4200',
                methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
                allowedHeaders: ['Content-Type', 'Authorization'],
                credentials: true
}));

// ✅ Ajout du middleware pour parser le corps des requêtes JSON
app.use(express.json());
// Utilisateurs valides
const usersFile = "./users.json";
function readUsers() {
  const data = fs.readFileSync(usersFile, "utf8");
  return JSON.parse(data);
}

// Fonction pour écrire في users.json
function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), "utf8");
}




const products = [
  {
    id: 1,
    name: "Attack on Titan",
    description: "A brutal world under siege by towering Titans. Eren Yeager joins the military to avenge his family and discover the truth about the Titans.",
    price: 900,
    quantity: 139,
    imageUrl: "1.jpg",
    author: "Hajime Isayama",
    genre: "Action, Drama",
    rating: 9.0,
    chapters: 139,
    fullSummary: "Attack on Titan follows Eren Yeager in a world where humanity hides behind walls to protect itself from Titans—giant humanoid creatures. After his mother is killed, Eren vows revenge. The story reveals hidden political conspiracies and mysteries about the Titans, challenging morality and survival."
  },
  {
    id: 2,
    name: "Naruto",
    description: "Naruto Uzumaki, a misfit ninja, dreams of becoming Hokage to earn respect. But a demon fox sealed inside him complicates his journey.",
    price: 880,
    quantity: 700,
    imageUrl: "2.jpg",
    author: "Masashi Kishimoto",
    genre: "Action, Adventure",
    rating: 8.8,
    chapters: 700,
    fullSummary: "Naruto tells the tale of a boy shunned by his village for harboring a demon inside him. Through grit and determination, Naruto trains to become a great ninja and earn everyone's acknowledgment. The series emphasizes friendship, rivalry, and growth."
  },
  {
    id: 3,
    name: "One Piece",
    description: "Monkey D. Luffy sets out to become the Pirate King by finding the legendary treasure known as One Piece.",
    price: 920,
    quantity: 1100,
    imageUrl: "3.jpg",
    author: "Eiichiro Oda",
    genre: "Adventure, Fantasy",
    rating: 9.2,
    chapters: 1100,
    fullSummary: "One Piece is an epic pirate adventure. Luffy, a rubber-powered boy, travels across seas with his diverse crew. They face powerful enemies, uncover secrets of ancient history, and battle for freedom, all in pursuit of the fabled One Piece treasure."
  },
  {
    id: 4,
    name: "Death Note",
    description: "Light Yagami discovers a notebook that kills anyone whose name is written in it. He attempts to cleanse the world of evil.",
    price: 910,
    quantity: 108,
    imageUrl: "4.jpg",
    author: "Tsugumi Ohba",
    genre: "Mystery, Thriller",
    rating: 9.1,
    chapters: 108,
    fullSummary: "Death Note is a psychological battle between Light Yagami, who believes in his divine mission to kill criminals, and L, a mysterious detective. It explores justice, morality, and the consequences of unchecked power."
  },
  {
    id: 5,
    name: "Demon Slayer",
    description: "Tanjiro Kamado fights demons and protects his sister Nezuko after their family is slaughtered.",
    price: 870,
    quantity: 205,
    imageUrl: "5.jpg",
    author: "Koyoharu Gotouge",
    genre: "Action, Supernatural",
    rating: 8.7,
    chapters: 205,
    fullSummary: "Demon Slayer follows Tanjiro’s mission to hunt demons and find a cure for his demon-turned sister. Along the way, he joins the Demon Slayer Corps and faces emotionally complex enemies with tragic backstories."
  },
  {
    id: 6,
    name: "Jujutsu Kaisen",
    description: "Yuji Itadori gains cursed powers after swallowing a demon's finger and enters a world of jujutsu sorcerers.",
    price: 850,
    quantity: 9,
    imageUrl: "6.jpg",
    author: "Gege Akutami",
    genre: "Action, Supernatural",
    rating: 8.5,
    chapters: 250,
    fullSummary: "Jujutsu Kaisen dives into a world where cursed energy creates monsters. Yuji hosts the King of Curses—Sukuna—and must fight evil spirits while maintaining his humanity. The series explores death, sacrifice, and inner demons."
  },
  {
    id: 7,
    name: "Bleach",
    description: "Ichigo Kurosaki becomes a Soul Reaper and defends the living world from evil spirits known as Hollows.",
    price: 830,
    quantity: 686,
    imageUrl: "7.jpg",
    author: "Tite Kubo",
    genre: "Action, Supernatural",
    rating: 8.3,
    chapters: 686,
    fullSummary: "Bleach follows Ichigo, a teenager who gains the powers of a Soul Reaper. He protects the living and battles spirits, rival clans, and internal corruption. It blends sword battles with deep emotional stakes."
  },
  {
    id: 8,
    name: "Tokyo Ghoul",
    description: "Kaneki transforms into a half-ghoul and must navigate the violent world of human-eating creatures.",
    price: 840,
    quantity: 179,
    imageUrl: "8.jpg",
    author: "Sui Ishida",
    genre: "Dark Fantasy",
    rating: 8.4,
    chapters: 179,
    fullSummary: "Tokyo Ghoul is a dark tale of identity. Kaneki, once human, is forced to live among flesh-eating ghouls while struggling to retain his humanity. The story is filled with psychological tension and questions about morality."
  },
  {
    id: 9,
    name: "Fullmetal Alchemist",
    description: "Two brothers use alchemy in a quest to restore their bodies after a failed resurrection.",
    price: 920,
    quantity: 116,
    imageUrl: "9.jpg",
    author: "Hiromu Arakawa",
    genre: "Adventure, Sci-Fi",
    rating: 9.2,
    chapters: 116,
    fullSummary: "Fullmetal Alchemist explores the journey of Edward and Alphonse Elric. After a forbidden ritual costs them dearly, they seek the Philosopher’s Stone while facing war, politics, and the consequences of human transmutation."
  },
  {
    id: 10,
    name: "Dragon Ball",
    description: "Follow Goku's rise from a cheerful boy to the universe’s most powerful warrior.",
    price: 860,
    quantity: 519,
    imageUrl: "10.jpg",
    author: "Akira Toriyama",
    genre: "Action, Fantasy",
    rating: 8.6,
    chapters: 519,
    fullSummary: "Dragon Ball follows Goku's evolution through martial arts, friendships, rivalries, and cosmic battles. It begins with a lighthearted tone and grows into an epic saga of gods, tournaments, and universe-saving missions."
  }
];
function readProducts() {
  return products;
}


const fs = require("fs");
const path = require("path");

app.post("/api/signin", (req, res) => {
  const email = req.body.email?.trim().toLowerCase();
  const password = req.body.password;

  const filePath = path.join(__dirname, "users.json");

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Erreur de lecture" });
    }

    let users;
    try {
      users = JSON.parse(data);
    } catch (e) {
      return res.status(500).json({ success: false, message: "Fichier JSON invalide" });
    }

    const user = users.find(u => u.email.toLowerCase() === email);

    if (user && user.password === password) {
      return res.status(200).json({
        success: true,
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        }
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Email ou mot de passe incorrect"
      });
    }
  });
});




app.get("/api/products", (req, res) => {
  res.json(products); // Utilisez json() au lieu de send()
});

app.get("/api/products/:id", (req, res) => {
  const manga = products.find(p => p.id === parseInt(req.params.id)); // ← تأكد id number
  if (!manga) {
    return res.status(404).json({ message: "Product not found" }); // ❗ no null
  }

  res.json(manga);
});




// Route التسجيل
app.post("/api/signup", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  let users = readUsers();

  // التحقق واش البريد الإلكتروني موجود
  const userExists = users.some(u => u.email === email);
  if (userExists) {
    return res.status(409).json({ success: false, message: "Email already exists" });
  }

  // نحسبو id الجديد تلقائياً
  const lastId = users.length > 0 ? Math.max(...users.map(u => u.id || 0)) : 0;
  const newUser = { 
    id: lastId + 1, 
    firstName, 
    lastName, 
    email, 
    password 
  };

  users.push(newUser);

  writeUsers(users);

  return res.status(201).json({
    success: true,
    user: {
      id: newUser.id,
      firstName,
      lastName,
      email
    }
  });
});





app.get("/api/users", (req, res) => {
  const filePath = path.join(__dirname, "users.json");

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de lecture de fichier" });
    }

    try {
      const users = JSON.parse(data);
      res.json(users);
    } catch (e) {
      res.status(500).json({ message: "Contenu invalide dans users.json" });
    }
  });
});



const cartFile = "./cart.json";

// قراءة الكارتات
function readCart() {
  const data = fs.readFileSync(cartFile, "utf8");
  return JSON.parse(data);
}

// كتابة فـ الكارت
function writeCart(cartItems) {
  fs.writeFileSync(cartFile, JSON.stringify(cartItems, null, 2), "utf8");
}

// ➕ route للإضافة للكارت
app.post("/api/cart", (req, res) => {
  const { userId, productId, date } = req.body;

  if (!userId || !productId || !date) {
    return res.status(400).json({ success: false, message: "Champs manquants" });
  }

  const cartItems = readCart();

  // 🔍 التحقق واش المنتج already in the cart for the same user
  const alreadyExists = cartItems.some(item => item.userId === userId && item.productId === productId);

  if (alreadyExists) {
    return res.status(409).json({ success: false, message: "Produit déjà dans le panier" });
  }

  // ✅ ما كاينش، نضيفوه
  cartItems.push({ userId, productId, date });
  writeCart(cartItems);

  res.status(201).json({ success: true, message: "Produit ajouté au panier" });
});


app.get("/api/cart/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const cartItems = readCart();
  const products = readProducts();

  console.log('User ID:', userId); // للتأكد من وصول الـ ID صحيح
  
  const userCart = cartItems.filter(item => item.userId == userId); // استخدم == بدل === لتفادي مشكلة النوع

  const detailedCart = userCart.map(item => {
    const product = products.find(p => p.id == item.productId);
    return product ? { ...item, ...product } : null;
  }).filter(Boolean);

  console.log('Detailed cart:', detailedCart); // للتأكد من البيانات المرسلة
  res.json(detailedCart);
});





const commandeFile = "./commande.json";
// Fonctions pour gérer les commandes
function readCommandes() {
  try {
    if (!fs.existsSync(commandeFile)) {
      fs.writeFileSync(commandeFile, "[]", "utf-8");
      return [];
    }
    const data = fs.readFileSync(commandeFile, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Erreur lecture commandes:", err);
    return [];
  }
}

function writeCommandes(commandes) {
  try {
    fs.writeFileSync(COMMANDES_FILE, JSON.stringify(commandes, null, 2));
    console.log('Commandes sauvegardées:', commandes.length);
    return true;
  } catch (err) {
    console.error("Erreur écriture commandes:", err);
    return false;
  }
}

const COMMANDES_FILE = './commande.json';

function readCommandes() {
  try {
    const data = fs.readFileSync(COMMANDES_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function writeCommandes(commandes) {
  fs.writeFileSync(COMMANDES_FILE, JSON.stringify(commandes, null, 2));
}

app.post('/api/commandes', (req, res) => {
  const { userId, products, adresse, telephone, totalPrice } = req.body;

  if (!userId || !Array.isArray(products) || products.length === 0 || !adresse || !telephone) {
    return res.status(400).json({ message: 'userId, products, adresse, telephone sont requis.' });
  }

  const commandes = readCommandes();

  const productIds = products.map(p => p.id);

  const newCommande = {
    id: commandes.length > 0 ? Math.max(...commandes.map(c => c.id)) + 1 : 1,
    userId,
    productIds,
    adresse,
    telephone,
    date: new Date().toISOString(),
    status: 'en attente',
    productDetails: products,
    totalPrice//: totalPrice || products.reduce((sum, p) => sum + p.price * p.quantity, 0)
  };

  commandes.push(newCommande);
  
  writeCommandes(commandes);

  res.status(201).json({ message: 'Commande enregistrée avec succès', commande: newCommande });
});

app.get('/api/commandes/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const commandes = readCommandes();

  const userCommandes = commandes
    .filter(c => c.userId === userId)
    .map(c => ({
      id: c.id,
      date: c.date,
      status: c.status,
      totalPrice: c.totalPrice,
      products: c.productDetails.map(p => ({
        name: p.name,
        price: p.price,
        quantity: p.quantity
      }))
    }));

  res.json(userCommandes);
});
// Route pour supprimer une commande par son ID
app.delete('/api/commandes/:id', (req, res) => {
  const commandeId = parseInt(req.params.id);
  let commandes = readCommandes();

  const index = commandes.findIndex(c => c.id === commandeId);
  if (index === -1) {
    return res.status(404).json({ message: "Commande non trouvée" });
  }

  commandes.splice(index, 1); // supprimer la commande du tableau
  writeCommandes(commandes);

  res.json({ message: "Commande supprimée avec succès" });
});



app.listen(3000, () => console.log("Server started on port 3000"));


