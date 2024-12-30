document.getElementById('hitung').addEventListener('click', function() {
  const nilaiSelect = parseFloat(document.getElementById('pilihan').value);
  const nilaiInput = parseInt(document.getElementById('nilai1').value);

  if (!isNaN(nilaiSelect) && !isNaN(nilaiInput)) {
    const hasil =Math.round(nilaiInput / nilaiSelect);
    const jam = Math.floor(hasil / 60);
    const menit = hasil % 60;

  alert(`${jam} jam ${menit} menit`);
  } else {
    alert('Masukkan angka yang valid!');
  }
});
