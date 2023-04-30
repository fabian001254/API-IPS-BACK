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
     *               fecha:
     *                 type: string
     *                 format: date
     *               hora:
     *                 type: string
     *                 format: time
     *               medicoId:
     *                 type: integer
     *               pacienteId:
     *                 type: integer
     *             required:
     *               - fecha
     *               - hora
     *               - medicoId
     *               - pacienteId
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
     *                     id:
     *                       type: integer
     *                     fecha:
     *                       type: string
     *                       format: date
     *                     hora:
     *                       type: string
     *                       format: time
     *                     medicoId:
     *                       type: integer
     *                     pacienteId:
     *                       type: integer
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
     *                       id:
     *                         type: integer
     *                       fecha:
     *                         type: string
     *                         format: date
     *                       hora:
     *                         type: string
     *                         format: time
     *                       medicoId:
     *                         type: integer
     *                       pacienteId:
     *                         type: integer
     *       '500':
     *         description: Error del servidor
     */