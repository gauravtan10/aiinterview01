import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = 'https://uymsnufneqvvphlytjia.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5bXNubnVmZXF2dnBobHl0amlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNDE3MTEsImV4cCI6MjA2MzgxNzcxMX0.xHu1DeKM-X8lL-pCcJRSIc2N7Sew13SKfh6VwGqKaD4';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);