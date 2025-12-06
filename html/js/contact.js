document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Faleminderit për mesazhin tuaj! Do t\'iu kontaktojmë së shpejti.');
    this.reset();
});