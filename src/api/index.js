/**
 * api 列表文档
 */
import { postData } from './http'

// device-srv
export const regionListRegionSpecial = data => postData({ url: '/region/area/list/all', ...data })
