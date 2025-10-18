import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY created_at DESC');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, description, price, imageUrl, category, stock } = await request.json();
    
    const result = await pool.query(
      `INSERT INTO products (name, description, price, image_url, category, stock) 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [name, description, price, imageUrl, category, stock]
    );
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
