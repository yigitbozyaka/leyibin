import type { NextApiRequest, NextApiResponse } from 'next'
import {
    createClient
} from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl!, supabaseKey!)

interface Data {
    id: string
    content: string
    lang:  string
    title: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const {
                id
            } = req.query;

            const { data } = await supabase
                .from('paste')
                .select('id, content, lang, title')
                .eq('id', id)
                .single();
            res.status(200).json(data as Data);
        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Internal server error'
            })
        }
    } else {
        res.status(405).json({
            message: 'Method not allowed'
        })
    }

}