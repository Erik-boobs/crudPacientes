const express = require ('express');
const rutas = express.Router();

//consultar
rutas.get('/',(req, res)=>{
  req.getConnection((err, conn)=>{
    if(err) return res.send(err)

    conn.query('SELECT * FROM paciente', (err, rows)=>{
        if (err) return res.send(err)

        res.json(rows)
    });
  });
});

//Consultar uno solo
rutas.get('/:id',(req, res)=>{
    req.getConnection((err, conn)=>{
      if(err) return res.send(err)

      conn.query('SELECT * FROM paciente Where _id = ?', [req.params.id], (err, rows)=>{
          if (err) return res.send(err)
  
          res.json(rows)
      });
    });
  });


//insertar
rutas.post('/',(req, res)=>{
    req.getConnection((err, conn)=>{
      if(err) return res.send(err)

      conn.query('INSERT INTO paciente SET ?', [req.body], (err, rows)=>{
          if (err) return res.send(err)
  
          res.send('Paciente registrado')
      });
    });
  });


  //eliminar
  rutas.delete('/:id',(req, res)=>{
    req.getConnection((err, conn)=>{
      if(err) return res.send(err)

      conn.query('DELETE FROM paciente WHERE _id = ?', [req.params.id], (err, rows)=>{
          if (err) return res.send(err)
  
          res.send('Paciente eliminado')
      });
    });
  });
  

  //actualizar
  rutas.put('/:id',(req, res)=>{
    req.getConnection((err, conn)=>{
      if(err) return res.send(err)

      conn.query('UPDATE paciente SET ? WHERE _id = ?', [req.body, req.params.id], (err, rows)=>{
          if (err) return res.send(err)
  
          res.send('Paciente actualizado')
      });
    });
  });

module.exports = rutas;