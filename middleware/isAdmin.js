const isClient = (req, res, next) => {
  // Establecer 'CLIENT' como rol por defecto si no se proporciona un rol específico
  if (!req.role) {
      req.role = 'CLIENT';
  }

  if (req.role === 'CLIENT') {
      next();
  } else {
      res.status(403).json({
          msg: 'Rol no autorizado',
      });
  }
};


const isAdmin = (req, res, next) => {
    if (req.role == 'ADMIN') {
      next();
    } else {
      res.status(403).json({
        msg: 'Rol no autorizado',
      });
    }
  };

  const isEmployee = (req, res, next) => {
    if (req.role === 'STAFF') {
        next();
    } else {
        res.status(403).json({
            msg: 'Rol no autorizado',
        });
    }
};
  
  export { isAdmin, isClient, isEmployee };