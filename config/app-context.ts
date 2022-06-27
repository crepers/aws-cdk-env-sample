// export namespace App {
//   export const Context = [{
//       env :'default',
//       ns: 'dev',
//       region: 'ap-northeast-2',
//     }, {
//       env : 'dev',
//       ns: 'dev',
//       region: 'ap-northeast-2',
//     }, {
//       env: 'stg',
//       ns: 'stg',
//       region: 'ap-northeast-2',
//     }, {
//       env: 'prd',
//       ns: 'prd',
//       region: 'ap-northeast-2',
//     }
//   ]
// }

export namespace App {
  export const Context = {
    default : {
      ns: 'dev',
      region: 'ap-northeast-2',
    },
    dev : {
      ns: 'dev',
      region: 'ap-northeast-2',
    },
    stg : {
      ns: 'stg',
      region: 'ap-northeast-2',
    },
    prd : {
      ns: 'prd',
      region: 'ap-northeast-2',
    },
  }
}

export namespace IdentityProvider {
  export const RedirectUri = 'http://localhost:3000'
}