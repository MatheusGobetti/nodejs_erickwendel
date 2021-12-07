/*
0 - Obter um usuario
1 - Obter o numero de telefone de um usuario a partir de seu ID
2 - Obter o enderco do usuario pelo ID
*/

function obterUsuario(callback) {
  setTimeout(function() {
    return callback(null, {
      id: 1,
      nome: 'Aladin',
      dataNascimento: new Date()
    })
  }, 1000)
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: '998526321',
      ddd: 11
    })
  }, 2000);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'Dos bobos',
      numero: 0
    })
  }, 2000)
}

function resolverUsuario(erro, usuario) {
  console.log('usuario: ',usuario)

}

obterUsuario(function resolverUsuario(error, usuario) {
  // null, "", 0 = false
  if(error) {
    console.error('DEU RUIM EM USUARIO', error)
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if(error1) {
      console.error('DEU RUIM EM TELEFONE', error)
      return;
    }
    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if(error2) {
        console.error('DEU RUIM EM ENDERECO', error)
        return;
      }

      console.log(`
        NOME: ${usuario.nome},
        ENDERECO: ${endereco.rua}, ${endereco.numero},
        TELEFONE: (${telefone.ddd})${telefone.telefone}
      `)
    })

  }) 
})
// const telefone = obterTelefone(usuario.id)

// console.log('telefone: ',telefone)
