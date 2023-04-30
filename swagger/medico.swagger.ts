  /**
   * @swagger
   * tags:
   *   name: Medico
   *   description: Endpoints para operaciones relacionadas con médicos.
   * 
   * /Medico:
   *   get:
     *     tags:
     *     - Medico
   *     summary: Obtiene la lista de todos los médicos registrados.
   *     responses:
   *       '200':
   *         description: OK
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 medicos:
   *                   type: array
   *                   items:
   *                     type: object
   *                     properties:
   *                        tarjetaProfesional:
   *                          type: integer
   *                        nombre:
   *                          type: string
   *                        apellido:
   *                          type: string
   *                        consultorio:
   *                          type: string
   *                        correo:
   *                          type: string
   *                        especialidad:
   *                          type: string
   *       '500':
   *         description: Error del servidor
   * 
   *   post:
   *     tags:
   *     - Medico
   *     summary: Crea un nuevo registro de médico en la base de datos.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               tarjetaProfesional:
   *                 type: integer
   *               nombre:
   *                 type: string
   *               apellido:
   *                 type: string
   *               consultorio:
   *                 type: string
   *               correo:
   *                 type: string
   *               especialidad:
   *                 type: string
   *             required:
   *               - nombre
   *               - apellido
   *               - especialidad
   *               - correo
   *               - tarjetaProfesional
   *               - consultorio
   *     responses:
   *       '201':
   *         description: Creado con éxito.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                 medico:
   *                   type: object
   *                   properties:
   *                     tarjetaProfesional:
   *                       type: integer
   *                     nombre:
   *                       type: string
   *                     apellido:
   *                       type: string
   *                     especialidad:
   *                       type: string
   *                     email:
   *                       type: string
   *       '400':
   *         description: Bad Request
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *       '500':
   *         description: Error del servidor
   */