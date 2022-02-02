var push = require('web-push')
// let vapidkeys =push.generateVAPIDKeys();
let vapidkeys =
{
    publicKey: 'BA4mPMsqvlLNKM1b7Xu__lTbWpRlt47bQJkKhNUmwLHnJ1jQShneCxp0kM9ygfQ7WYkQ5rHIEtggLaQ4ueQFwMA',
    privateKey: 'TpwXZ3x43LB9_7BgfKhJKeBWek7Q_ZGrKnWGoZf1fF0'
  };
push.setVapidDetails('mailto:test@code.co.uk',vapidkeys.publicKey,vapidkeys.privateKey);
push.sendNotification(sub,'test Message ')