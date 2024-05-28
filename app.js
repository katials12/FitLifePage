document.addEventListener('DOMContentLoaded', () => {
    const workoutList = document.getElementById('workout-list');
    const nutritionList = document.getElementById('nutrition-list');
    const addWorkoutBtn = document.getElementById('add-workout-btn');
    const addNutritionBtn = document.getElementById('add-nutrition-btn');

    addWorkoutBtn.addEventListener('click', () => {
        const workoutItem = prompt('Enter workout:');
        if (workoutItem) {
            const li = document.createElement('li');
            li.textContent = workoutItem;
            workoutList.appendChild(li);
        }
    });

    addNutritionBtn.addEventListener('click', () => {
        const nutritionItem = prompt('Enter nutrition:');
        if (nutritionItem) {
            const li = document.createElement('li');
            li.textContent = nutritionItem;
            nutritionList.appendChild(li);
        }
    });
});