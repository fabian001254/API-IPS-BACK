    /**
     * @swagger
     * tags:
     *   name: Cita
     *   description: Endpoints para operaciones relacionadas con citas.
     * 
     * /Cita:
     *   post:
     *     tags:
     *     - Cita
     *     summary: Crea una nueva cita.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *                fecha:
     *                  type: string
     *                  format: date
     *                cedulaPaciente:
     *                  type: integer
     *                tarjetaProfesional:
     *                  type: integer
     *             required:
     *               - fecha
     *               - cedulaPaciente
     *               - tarjetaProfesional
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
     *                 cita:
     *                   type: object
     *                   properties:
     *                       fecha:
     *                         type: string
     *                         format: date
     *                       cedulaPaciente:
     *                         type: integer
     *                       tarjetaProfesional:
     *                         type: integer
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
     * 
     *   get:
     *     tags:
     *     - Cita
     *     summary: Obtiene la lista de todas las citas registradas.
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 citas:
     *                   type: array
     *                   items:
     *                     type: object
     *                     properties:
     *                       Nombre_Medico:
     *                         type: string
     *                         format: date
     *                       Apellido_Medico:
     *                         type: string
     *                       Nombre_Paciente:
     *                         type: string
     *                       Apellido_Paciente:
     *                         type: string
     *                       Cedula_Paciente:
     *                         type: integer
     *                       Dia_Cita:
     *                          type: string
     *                          format: date
     *       '500':
     *         description: Error del servidor
     */