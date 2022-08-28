set -e

## Frontend
# Install Dependencies
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Lint
npm run lint

# Test
npm run test:ci

# Test
npm run build
## Frontend

echo "#################"
echo "CI Passed!"
echo "#################"