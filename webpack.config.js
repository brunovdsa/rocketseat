module.exports = {
	entry: './src/main.js', //qual é o arquivo principal
	output: { //pra qual arquivo e lugar deve enviar o cod convertido
		path: __dirname + '/public',
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: __dirname + '/public', //caminho de para onde deve ir no servidor
	},
	module: {
		rules: [ //como o webpack deve se comportar quando o usuario estiver tentando importar novos arquivos js
			{
				test: /\.js$/, //sinal de $ singnifica final, e // expressão regular, \qualquer arquivo
				exclude: /node_modules/, //excluir a pasta para que o babel nao execute nenhum arquivo js da pasta
				use: {
					loader: 'babel-loader',
				}
			}
		],
	},
};
