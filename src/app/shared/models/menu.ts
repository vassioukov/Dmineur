export let MENU_ITEM = [
    /*
    Routes invité
    */
    {
        path: 'lobby',
        title: 'Accueil',
        icon: 'home',
        profile:'guest'
    },
    {
        path: 'presenting',
        title: 'Présentation',
        icon: 'user',
        profile:'guest' 
    },
    {
        path: 'thrift',
        title: 'Epargne',
        icon: 'money',
        profile:'guest'
    },
    {
        path: 'login',
        title: 'Connexion',
        icon: 'sign-in',
        profile:'guest'
    },
    {
        path: 'createUserAccount',
        title: 'Créer un compte utilisateur',
        icon: 'user-plus',
        profile:'guest'
    },
    /*
    Routes client
    */
    {
        path: 'viewAccount',
        title: 'Consulter comptes',
        icon: 'eye',
        profile:'client'
    },
    {
        path: 'doTransfer',
        title: 'Virements bancaires',
        icon: 'exchange',
        profile:'client'
    },
    {
        path: 'askCheck',
        title: 'Commander chéquier',
        icon: 'shopping-cart',
        profile:'client'
    },
    {
        path: 'addAccount',
        title: 'Ajouter compte',
        icon: 'plus-circle',
        profile:'client'
    },
    {
        path: 'editAccount',
        title: 'Modifier infos persos',
        icon: 'pencil-square-o',
        profile:'client'
    },
    /*
    Routes agent
    */
    {
        path: 'lobby',
        title: 'Accueil',
        icon: 'home',
        profile:'agent'
    },
    {
        path: 'managementClients',
        title: 'Gestion des clients',
        icon: 'users',
        profile:'agent'
    },
    {
        path: 'bankAccountValidation',
        title: 'Validation des comptes bancaires',
        icon: 'credit-card-alt',
        profile:'agent'
    },
    {
        path: 'checkValidation',
        title: 'Validation des chéquiers',
        icon: 'envelope-open-o',
        profile:'agent'
    },
    /*
    Routes admin
    */
    {
        path: 'dashboard',
        title: 'Dashboard',
        icon: 'tachometer',
        profile:'admin'
    },
    {
        path: 'assignmentRequest',
        title: 'Demande d\'affectation',
        icon: 'calendar-plus-o',
        profile:'admin'
    },
    {
        path: 'managementAgents',
        title: 'Gestion des conseillers',
        icon: 'folder-open',
        profile:'admin'
    },
    {
        path: 'managementClients',
        title: 'Gestion des clients',
        icon: 'users',
        profile:'admin'
    },
];
