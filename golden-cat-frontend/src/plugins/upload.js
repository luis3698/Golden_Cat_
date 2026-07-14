import api from '@/plugins/api'

/**
 * Sube una imagen al backend (reemplazo de Firebase Storage).
 * El archivo se guarda en el servidor y queda registrado en la base de datos SQL.
 *
 * @param {File} file  Archivo de imagen seleccionado por el usuario.
 * @param {Object} [meta]  Metadatos opcionales de la entidad asociada.
 * @param {string} [meta.entityType]  Ej. 'user' | 'room'.
 * @param {string} [meta.entityId]    UUID de la entidad asociada.
 * @returns {Promise<{uuid:string, url:string, filename:string}>}
 */
export async function uploadImage (file, meta = {}) {
  const formData = new FormData()
  formData.append('image', file)
  if (meta.entityType) formData.append('entityType', meta.entityType)
  if (meta.entityId) formData.append('entityId', meta.entityId)

  const { data } = await api.post('/image', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  return data
}

export default uploadImage
