-- CreateTable
CREATE TABLE `Paciente` (
    `cedula` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `fechaNacimiento` DATETIME(3) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cedula`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Medico` (
    `tarjetaProfesional` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `consultorio` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `idEspecialidad` INTEGER NULL,

    PRIMARY KEY (`tarjetaProfesional`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cita` (
    `idcita` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(3) NOT NULL,
    `pacienteCedula` INTEGER NULL,
    `tarjetaProfesional` INTEGER NULL,

    PRIMARY KEY (`idcita`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Especialidad` (
    `idEspecialidad` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Especialidad_nombre_key`(`nombre`),
    PRIMARY KEY (`idEspecialidad`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Medico` ADD CONSTRAINT `Medico_idEspecialidad_fkey` FOREIGN KEY (`idEspecialidad`) REFERENCES `Especialidad`(`idEspecialidad`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cita` ADD CONSTRAINT `Cita_tarjetaProfesional_fkey` FOREIGN KEY (`tarjetaProfesional`) REFERENCES `Medico`(`tarjetaProfesional`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cita` ADD CONSTRAINT `Cita_pacienteCedula_fkey` FOREIGN KEY (`pacienteCedula`) REFERENCES `Paciente`(`cedula`) ON DELETE SET NULL ON UPDATE CASCADE;
