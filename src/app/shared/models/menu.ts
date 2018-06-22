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
    /*
    Routes agent
    */
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
        title: 'Dashboard',
        icon: 'tachometer',
        profile:'admin'
    },
    {
        path: 'managementAgents',
        title: 'Gestion des conseillers',
        icon: 'users',
        profile:'admin'
    },
    {
        path: 'managementClients',
        title: 'Gestion des clients',
        icon: 'users',
        profile:'admin'
    },
];
