document.getElementById('cleaning_products').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var task = document.querySelector('input[name="task"]:checked').value;
    var floorType = document.querySelector('input[name="floor"]:checked').value;
    var allergies = document.querySelector('input[name="allergies"]:checked').value;
    var budget = document.querySelector('input[name="price"]:checked').value;
  
    var result = 'Basé sur vos réponses, je vous recommande ';
  
    switch(true) {
      case (task === 'all' && floorType === 'none' && (allergies === 'no' || allergies === 'yes') && budget === 'high'):
        result += 'le nettoyant multi-surface au vinaigre de la marque "La Droguerie".';
        break;
      case (task === 'all' && floorType === 'none' && allergies === 'no' && budget === 'medium'):
        result += 'le nettoyant multi-surface Surfa Safe Premium Rouge.';
        break;
      case (task === 'all' && floorType === 'none' && allergies === 'no' && budget === 'low'):
        result += 'le nettoyant vitres et surfaces écologique LVSM 600.';
        break;
      case ((task === 'clean' || task === 'disinfect' || task === 'rmstains' || task === 'all') && floorType === 'wood' && (allergies === 'yes' || allergies === 'no') && budget === 'low'):
        result += 'le nettoyant Bona Wood Floor Cleaner Free & Simple. Il est spécialement conçu pour les personnes sensibles aux allergies.';
        break;
      case (task === 'disinfect' && floorType === 'tiles' && allergies === 'no' && budget === 'medium'):
        result += 'le nettoyant détergent carrelage au savon huile de lin de Delcourt.';
        break;
      case (task === 'rmstains' && floorType === 'marble' && (allergies === 'yes' || allergies === 'no') && budget === 'high'):
        result += 'le nettoyant rénovation pour marbre de Arcane.';
        break;
      case (task === 'disinfect' && (floorType === 'tiles' || floorType === 'marble') && allergies === 'no' && budget === 'low'):
        result += 'de vous servir de la javel.';
        break;
      default:
        result += 'de me contacter pour avoir des recommandations personnalisées.';
        break;
    }        
  
    alert(result);
  });