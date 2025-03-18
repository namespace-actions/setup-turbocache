# High performance Turborepo Caching on Namespace

Use `namespace-actions/setup-turbocache` to setup `turborepo` to use external
caching, powered by Namespace's high performance caching.

## Example

```yaml
name: Tests
jobs:
  tests:
    runs-on: namespace-profile-my-profile
 
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
 
      - name: Set up caching
        uses: namespace-actions/setup-turbocache
 
      - name: Build
        run: turbo build
```

## Configuration

The action works out of the box with no configuration.

If needed, you can segment the caches used across different use-cases within the same workspace.

To do so, pass a `team` explicitly. By default `main` is used.

```yaml
name: Tests
jobs:
  tests:
    runs-on: namespace-profile-my-profile
 
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
 
      - name: Set up caching
        uses: namespace-actions/setup-turbocache
        with:
          team: second
 
      - name: Build
        run: turbo build
```
