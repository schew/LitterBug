var waste = user1Data.weightData[user1Data.weightData.length - 1]
var tipId = Math.random()
var price = 0.5
var tip
var savings
var type

if(user1Data.weightData.length < 1) {
    tip = "Welcome to <b>Footprint</b>! Remember to <b>be conconcious</b> of your waste habits " +
          "so that you don't get any nasty surprises in your first waste bill!"

    type = "A Beginning Tip"


} else if(tipId < 0.33) {

    var cost = waste * price 
    savings = Math.round(cost * 0.05 * 60)

    tip = "You spent <b>$" + cost + "</b> this month. " + 
          "If you curbed your waste by 5%, in 5 years you could save <b>$" + savings + 
          "</b>. A nice treat to celebrate with!"

    type = "A Financial Tip"

} /*else if (tipId < 0.50) {

    savings = Math.round(waste * 0.05 * 40 * 12)

    tip = "You wasted <b>" + waste + "lbs </b> this month. " + 
          "If you curbed this by 5%, you would save <b>" + savings + "lbs of CO2</b> in just one year!"

    type = "An Environmental Tip"


}*/ else if (tipId < 0.66) {

    savings = Math.round(waste * 0.146 * 0.3 * 12)
    var ghg = Math.round(savings * 3.8)

    tip = "If you finished 30% more of your food, over one year you'd save about <b>" + savings +
          " pounds of food</b> from going to your local waste facility. That's <b>" + ghg +
          "lbs of greenhouse gases</b>!"

    type = "An Environmental Tip"


} else if (tipId < 1.0) {

    savings = Math.round(waste * 0.128 * 12 * 0.4 * 6)

    tip = "Plastic packaging is a large part of the U.S. waste stream. If you reduced your " + 
          "plastic waste by 40%, in one year you'd save <b>" + savings + "lbs of CO2</b>!"

    type = "An Environmental Tip"
}

document.getElementById("tipText").innerHTML = tip
document.getElementById("tipType").innerHTML = type

$('#tipDiv').css('background', 'rgba(194,0,0, .6')
$('#tipDiv').css('border-radius', '6px')
$('#tipDiv').css('padding-top', '12px')
$('#tipDiv').css('padding', '6px')
$('#tipDiv').css('width', '300px')
$('#tipDiv').css('height', '400')
$('#tipDiv').css('margin-top', '77px')
$('#tipDiv').css('text-align', 'center')
$('#tipDiv').css('float', 'left')
$('#tipTitle').css('font-size', '35px')
$('#tipTitle').css('margin-top', '20px')
$('#tipDiv').css('border-radius', '6px')


$('#tipText').css('font-size', '18px')
$('#tipText').css('padding', '10px')



$('#tipType').css('font-size', '20px')
$('#tipType').css('background', 'rgba(83, 83, 83, 0.6)')
$('#tipType').css('border-radius', '6px')
$('#tipType').css('display', 'inline-block')
$('#tipType').css('padding', '8px')

//$('#tipType').css('padding', '30px')




