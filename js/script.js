// Function to show a specific view by ID
document.addEventListener('DOMContentLoaded', function () {
    const views = document.querySelectorAll('.view');
    const viewShow = (id) => {
        views.forEach(view => view.style.display = 'none');
        document.getElementById(id).style.display = 'block';
    };

    // Event listeners for view links
    document.getElementById('viewlink1').addEventListener('click', function () {
        viewShow('view1');
    });

    document.getElementById('viewlink2').addEventListener('click', function () {
        viewShow('view2');
    });

    document.getElementById('viewlink3').addEventListener('click', function () {
        viewShow('view3');
        // Event listener for close button in modal
        const closeButton = document.querySelector('.close-button');
        const modal = document.getElementById('modal');
        closeButton.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    });

    // Show the initial view
    viewShow('view1');

});

new TypeIt(".typeIt", {
    strings: "/matipretz.ar",
    speed: 50,
    waitUntilVisible: true,
}).go();
