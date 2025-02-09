document.querySelectorAll('.post').forEach(post => {
    post.addEventListener('click', () => {
        alert('You clicked on a post!');
    });
});
// Function to display recipe details
function showRecipe() {
    const recipe = document.getElementById('recipeSelect').value;
    const recipeDetails = document.getElementById('recipeDetails');

    // Recipe details
    const recipes = {
        Pasta: "Ingredients: Pasta, Tomato Sauce, Cheese, Olive Oil. Steps: Boil pasta, prepare sauce, mix together.",
        Pizza: "Ingredients: Dough, Tomato Sauce, Cheese, Toppings. Steps: Prepare dough, add toppings, bake in oven.",
        Salad: "Ingredients: Lettuce, Tomatoes, Cucumber, Dressing. Steps: Chop vegetables, mix, and add dressing.",
        Biryani: "Ingredients: Rice, Chicken, Spices, Yogurt. Steps: Cook rice, prepare masala, layer and cook together."
    };

    if (recipe) {
        recipeDetails.innerHTML = <div><h2>${recipe}</h2>
            <p>${recipes[recipe]}</p>;</div>
    } else {
        recipeDetails.innerHTML = '';
    }
}
