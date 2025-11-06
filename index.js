const recipeListEl = document.getElementById("recipe-list");

const recipes = [
  {
    title: "Paneer Butter Masala",
    image: "https://th.bing.com/th/id/OIP.fgEb3K-H9k8ovUMpQhnQxgHaFj?rs=1&pid=ImgDetMain",
    ingredients: "Paneer, Tomato, Onion, Cream, Butter, Garam Masala, Ginger-Garlic Paste",
    description: "Paneer Butter Masala is a creamy, rich North Indian curry made with soft paneer cubes cooked in a spiced tomato gravy. This dish is a favorite in Indian restaurants and pairs beautifully with butter naan or jeera rice.",
    steps: [
      "Heat butter and sauté onions until golden brown.",
      "Add tomato puree, spices, and cook until oil separates.",
      "Add cream and paneer cubes, simmer for 5 minutes.",
      "Garnish with coriander and serve hot with naan or rice."
    ],
    extra: "The blend of butter and cream gives it a smooth texture and mild sweetness that balances the spices perfectly."
  },
  {
    title: "Chicken Biryani",
    image: "https://static.vecteezy.com/system/resources/previews/040/703/949/non_2x/ai-generated-royal-feast-master-the-art-of-chicken-biryani-at-home-generative-ai-photo.jpg",
    ingredients: "Chicken, Basmati Rice, Yogurt, Onion, Garlic, Ginger, Biryani Masala, Saffron",
    description: "Chicken Biryani is a fragrant, layered rice dish made with aromatic spices and marinated chicken. It’s a royal dish from Mughlai cuisine known for its mouthwatering aroma and golden saffron color.",
    steps: [
      "Marinate chicken with yogurt and spices for 2 hours.",
      "Cook half-boiled rice separately.",
      "Layer chicken and rice, sprinkle saffron milk, and seal the pot.",
      "Cook on low heat (dum) for 20-25 minutes and serve hot."
    ],
    extra: "Serve with raita or salad for a complete, balanced meal."
  },
  {
    title: "Masala Dosa",
    image: "https://img.freepik.com/premium-photo/masala-dosa-is-south-indian-meal-served-with-sambhar-coconut-chutney-selective-focus_466689-22958.jpg?w=2000",
    ingredients: "Dosa Batter, Boiled Potatoes, Mustard Seeds, Curry Leaves, Turmeric, Oil",
    description: "Masala Dosa is a crispy South Indian crepe stuffed with spiced potato filling, served with chutney and sambar. It’s light, delicious, and one of India’s most popular breakfast dishes.",
    steps: [
      "Prepare potato filling with mustard seeds, onions, and turmeric.",
      "Spread dosa batter on a hot tawa and drizzle oil.",
      "Add potato filling inside and fold the dosa.",
      "Serve hot with coconut chutney and sambar."
    ],
    extra: "You can make the dosa extra crispy by spreading the batter thinly and cooking on medium flame."
  },
  {
    title: "Gulab Jamun",
    image: "https://tse2.mm.bing.net/th/id/OIP.AQsrZuXEq98Q1bZbT35EqgHaHt?rs=1&pid=ImgDetMain",
    ingredients: "Khoya, Flour, Sugar, Cardamom, Ghee",
    description: "Gulab Jamun is a classic Indian dessert made of fried milk solids soaked in cardamom-flavored sugar syrup. Soft, sweet, and melt-in-mouth, it’s a favorite at every festival and celebration.",
    steps: [
      "Make small balls from khoya and flour mixture.",
      "Deep fry in ghee until golden brown.",
      "Soak in warm sugar syrup flavored with cardamom.",
      "Serve warm or chilled."
    ],
    extra: "For extra flavor, add a few drops of rose water or saffron to the syrup."
  },
  {
    title: "Chole (Chickpea Curry)",
    image: "https://www.thespruceeats.com/thmb/hSx3HmGi0mB602IPjtUC2DQ5vwc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chole-chickpea-curry-1957946-hero-01-cddf957cc78d4032ba29ec2adbc05a97.jpg",
    ingredients: "Chickpeas, Onion, Tomato, Garlic, Ginger, Chole Masala, Oil",
    description: "Chole is a popular Punjabi curry made with chickpeas simmered in a tangy and spicy tomato gravy. It’s hearty, flavorful, and best enjoyed with bhature or rice.",
    steps: [
      "Soak chickpeas overnight and boil until soft.",
      "Sauté onions, tomatoes, and spices in oil.",
      "Add boiled chickpeas and simmer for 15 minutes.",
      "Garnish with coriander and serve with bhature or rice."
    ],
    extra: "Adding a pinch of amchur (dry mango powder) gives it a nice tangy twist."
  },
  {
    title: "Aloo Gobi",
    image: "https://tse4.mm.bing.net/th/id/OIP.G817p1O4XLoRCtXXfHqSQgHaHa?rs=1&pid=ImgDetMain",
    ingredients: "Potatoes, Cauliflower, Onion, Tomato, Turmeric, Garam Masala, Oil",
    description: "Aloo Gobi is a dry curry made with potatoes, cauliflower, and aromatic Indian spices. It’s simple, healthy, and often served with roti or paratha.",
    steps: [
      "Heat oil and add cumin seeds, onions, and tomatoes.",
      "Add turmeric, chili, and garam masala.",
      "Add chopped potatoes and cauliflower, cover and cook.",
      "Stir occasionally until tender, then serve hot."
    ],
    extra: "Squeeze fresh lemon juice before serving for a fresh tangy flavor."
  },
  {
    title: "Rogan Josh",
    image: "https://www.kitchensanctuary.com/wp-content/uploads/2018/02/Slow-Cooker-Healthier-SYn-Free-Chicken-Rogan-Josh-Recipe-square-FS.jpg",
    ingredients: "Lamb, Yogurt, Onion, Garlic, Ginger, Kashmiri Red Chilli, Garam Masala",
    description: "Rogan Josh is a flavorful Kashmiri curry known for its rich red color and tender lamb pieces cooked in spices and yogurt. The dish is deeply aromatic and full of bold flavors.",
    steps: [
      "Sauté onions, ginger, and garlic in ghee.",
      "Add lamb and sear until browned.",
      "Add spices and yogurt, cook slowly until tender.",
      "Serve with steamed rice or naan."
    ],
    extra: "Using Kashmiri red chili powder gives the curry its signature deep red color without making it overly spicy."
  },
  {
    title: "Dhokla",
    image: "https://blog.swiggy.com/wp-content/uploads/2024/06/Image-1_Khaman-Dhokla.png",
    ingredients: "Gram Flour, Yogurt, Water, Eno Fruit Salt, Turmeric, Oil, Mustard Seeds",
    description: "Dhokla is a soft, spongy Gujarati snack made from fermented gram flour batter, steamed and tempered with mustard seeds. It’s a healthy, light, and tangy snack loved across India.",
    steps: [
      "Mix gram flour, yogurt, and water to make batter.",
      "Add Eno fruit salt before steaming.",
      "Steam for 15 minutes, cool and cut into pieces.",
      "Add tempering of mustard seeds and curry leaves on top."
    ],
    extra: "Serve with green chutney and sweet tamarind chutney for a perfect tea-time snack."
  }
];

function displayRecipes() {
  recipeListEl.innerHTML = "";

  recipes.forEach(recipe => {
    const li = document.createElement("li");
    li.classList.add("recipe-item");

    li.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" />
      <h2>${recipe.title}</h2>
      <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
      <a href="#" onclick="openRecipe('${recipe.title}', '${recipe.image}', '${recipe.ingredients}', '${recipe.description}', '${recipe.steps.join(" | ")}', '${recipe.extra}')">View Recipe</a>
    `;
    recipeListEl.appendChild(li);
  });
}

function openRecipe(title, image, ingredients, description, steps, extra) {
  const stepList = steps.split(" | ").map(step => `<li>${step}</li>`).join("");

  const newWindow = window.open("", "_blank");
  newWindow.document.write(`
    <html>
      <head>
        <title>${title}</title>
        <style>
          body { font-family: 'Poppins', sans-serif; background: linear-gradient(135deg, #fff5e6, #ffe0b2); color: #333; padding: 30px; text-align: center; }
          img { width: 400px; border-radius: 16px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); margin-bottom: 15px; }
          h1 { color: #ff7043; font-size: 2.4em; margin-bottom: 10px; }
          ul { text-align: left; display: inline-block; background: #fff; padding: 15px 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
          li { margin-bottom: 6px; line-height: 1.4; }
          p { font-size: 1.1em; line-height: 1.6; margin-bottom: 10px; }
          .extra { background: #fff3e0; padding: 15px; border-radius: 12px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); margin-top: 20px; font-style: italic; }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        <img src="${image}" alt="${title}" />
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Ingredients:</strong> ${ingredients}</p>
        <h3>🥄 Steps to Cook:</h3>
        <ul>${stepList}</ul>
        <div class="extra">${extra}</div>
      </body>
    </html>
  `);
}

displayRecipes();
