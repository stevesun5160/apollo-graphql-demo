import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load all .graphql files from the schema directory
const typesArray = loadFilesSync(join(__dirname, './**/*.graphql'));

// Merge all type definitions
const defs = mergeTypeDefs(typesArray);

export default defs;
