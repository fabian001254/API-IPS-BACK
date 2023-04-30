export default {
    /**
     * @swagger
     * tags:
     *   name: Especialidad
     *   description: Endpoints para operaciones relacionadas con especialidades.
     * 
     * /Especialidad:
     *   get:
     *     tags:
     *     - Especialidad
     *     summary: Obtiene la lista de todas las especialidades registradas.
     *     responses:
     *       '200':
     *         description: OK
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 especialidades:
     *                   type: array
     *                   items:
     *                     type: object
     *                     properties:
     *                       id:
     *                         type: integer
     *                       nombre:
     *                         type: string
     *       '500':
     *         description: Error del servidor
     * 
     *   post:
     *     tags:
     *     - Especialidad
     *     summary: Crea un nuevo registro de especialidad en la base de datos.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               nombre:
     *                 type: string
     *             required:
     *               - nombre
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
     *                 especialidad:
     *                   type: object
     *                   properties:
     *                     id:
     *                       type: integer
     *                     nombre:
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
  }
  