export interface FoodItem {
  id: string
  name: string
  description: string
  price: number
  category: 'breakfast' | 'lunch' | 'snacks' | 'beverages'
  image?: string
  available: boolean
  preparationTime: number
}

export interface CanteenOrder {
  id: string
  studentId: string
  items: OrderItem[]
  totalPrice: number
  status: 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled'
  orderTime: Date
  readyTime?: Date
  collectionTime?: Date
}

export interface OrderItem {
  id: string
  foodId: string
  name: string
  quantity: number
  price: number
}

export interface CanteenMenu {
  id: string
  date: Date
  items: FoodItem[]
  specialDish?: string
  specialDishPrice?: number
}

export interface CanteenAnalytics {
  date: Date
  totalOrders: number
  totalRevenue: number
  popularItems: string[]
  peakHours: string[]
}
