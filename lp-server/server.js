const express = require('express'),
			bodyParser = require('body-parser'),
			sgMail = require('@sendgrid/mail'),
			app = express(),
			fs = require('fs'),
			mjml2html = require('mjml');
			sgMail.setApiKey(sendgrid.env.SENDGRID_API_KEY);


app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/mailMe', function (req, res) {
	const mjml = fs.readFileSync(process.cwd() + '/email-template.mjml').toString('utf-8'),
				html = mjml2html(mjml).html,
				today = new Date(),
				id = Date.now(),
				email = req.body.email,
				totalAmount = req.body.summaryAmount,
				reqisits = '4890 4943 7185 3094',
				customerName = req.body.name,
				creationDate = today.getDate() +'.'+ (today.getMonth()+1) +'.'+ today.getFullYear(),
				deliveryDate = 'при оплате сейчас: ' + (today.getDate()+2) +'.'+ (today.getMonth()+1) +'.'+ today.getFullYear();
				model = req.body.model === 1 ? 'ecoAqua f-91 (подходит для одного)' : req.body.model === 2 ? 'ecoAqua f-92 (подходит для двоих)' : 'ecoAqua f-93 (на всю семью)',
				deliveryAndSetup = req.body.setup !== 'checked' ? 'нет' : 'да',
				deliveryAndSetupText = req.body.setup !== 'checked' ? 'После оплаты напшите в ответ на это письмо дату и время.' : 'После оплаты напшите в ответ на это письмо удобное вам время в чтобы принять нашего мастера. Мы позвоним вам за день до устанвоки и еще раз за 2 часа, чтобы вы подтвердили готовность.'
				customerPhone = req.body.phone,
				customerAdress = 'г. ' + req.body.city + ', ' + req.body.adress,
				bonusTime = (today.getHours()+3) + ':' + ( today.getMinutes() < 10 ? '0'+today.getMinutes() : today.getMinutes());

	let updatedHtml = '';
	updatedHtml = html.replace(/ID/g, id);
	updatedHtml = updatedHtml.replace(/REQISITS/g, reqisits);
	updatedHtml = updatedHtml.replace(/TOTAL_AMOUNT/g, totalAmount);
	updatedHtml = updatedHtml.replace(/CUSTOMER_NAME/g, customerName);
	updatedHtml = updatedHtml.replace(/CREATION_DATE/g, creationDate);
	updatedHtml = updatedHtml.replace(/DELIVERY_DATE/g, deliveryDate);
	updatedHtml = updatedHtml.replace(/MODEL/g, model);
	updatedHtml = updatedHtml.replace(/DELIVERY_AND_SETUP/g, deliveryAndSetup);
	updatedHtml = updatedHtml.replace(/MAIL_TEXT/g, deliveryAndSetupText);
	updatedHtml = updatedHtml.replace(/CUSTOMER_PHONE/g, customerPhone);
	updatedHtml = updatedHtml.replace(/CUSTOMER_ADRESS/g, customerAdress);
	updatedHtml = updatedHtml.replace(/BONUS_TIME/g, bonusTime);

	//console.log(updatedHtml);

	const msg = {
		to: req.body.email,
		from: 'office@ecoaqua.ru',
		subject: 'EcoAqua: квитанция на оплату фильтра для воды.',
		text: 'EcoAqua: квитанция на оплату фильтра для воды.',
		html: updatedHtml
	};
	sgMail.send(msg);
	res.sendStatus(200);
});

app.listen(3000, function () {
	console.log('Server listening on port 3000!');
});