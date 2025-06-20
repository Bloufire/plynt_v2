<template>
  <div class="content">
    <!-- Page Subtitle -->
    <div class="subtitle-section py-3">
      <div class="container">
        <p class="lead text-center">Explore all DeFi strategies</p>
      </div>
    </div>
    <!-- Filters Section -->
    <div class="filters-section py-3">
      <div class="container">
        <div class="row g-3 align-items-center">
          <!-- Text Filter -->
          <div class="col-12 col-md-3">
            <input
              v-model="searchQuery"
              type="text"
              class="form-control"
              placeholder="Search by strategy name..."
            />
          </div>
          <!-- Type Filter (Dropdown) -->
          <div class="col-12 col-md-3">
            <div class="dropdown">
              <button
                class="btn btn-outline-custom dropdown-toggle w-100 text-start"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ selectedTypesLabel }}
              </button>
              <ul class="dropdown-menu">
                <li v-for="type in types" :key="type" class="dropdown-item">
                  <div class="form-check ms-2">
                    <input
                      type="checkbox"
                      :id="`type-${type}`"
                      :value="type"
                      v-model="selectedTypes"
                      class="form-check-input"
                    />
                    <label :for="`type-${type}`" class="form-check-label text-capitalize">
                      {{ type }}
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- Sort Filter -->
          <div class="col-12 col-md-3">
            <select v-model="sortOrder" class="form-select">
              <option value="asc">Sort by APY (Ascending)</option>
              <option value="desc">Sort by APY (Descending)</option>
            </select>
          </div>
          <!-- Clear Button -->
          <div class="col-12 col-md-3 text-md-end">
            <button class="btn btn-custom" @click="resetFilters">Clear</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Strategies Section -->
    <div class="strategies-section py-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div v-for="strategy in filteredStrategies" :key="strategy.id" class="col">
            <CustomCard
              :header-image="strategy.headerImage"
              :header-text="strategy.headerText"
              :main-image="strategy.mainImage"
              :yield-text="strategy.yieldText"
            />
          </div>
        </div>
        <p v-if="!filteredStrategies.length" class="text-center mt-5">
          No strategies match the selected filters.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CustomCard from '../components/CustomCard.vue';
import strategiesData from '../assets/strategies.json';

export default {
  name: 'StrategiesPage',
  components: {
    CustomCard
  },
  data() {
    return {
      strategies: strategiesData,
      searchQuery: '',
      selectedTypes: ['stable', 'degen', 'safe'], // Tous sélectionnés par défaut
      types: ['stable', 'degen', 'safe'],
      sortOrder: 'asc' // Tri par défaut : croissant
    };
  },
  computed: {
    filteredStrategies() {
      let filtered = this.strategies;

      // Filtre textuel
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase().trim();
        filtered = filtered.filter((strategy) =>
          strategy.headerText.toLowerCase().includes(query)
        );
      }

      // Filtre par type
      if (this.selectedTypes.length) {
        filtered = filtered.filter((strategy) =>
          this.selectedTypes.includes(strategy.type)
        );
      }

      // Tri par APY
      filtered = filtered.sort((a, b) => {
        const apyA = parseFloat(a.yieldText.match(/[\d.]+/)[0]);
        const apyB = parseFloat(b.yieldText.match(/[\d.]+/)[0]);
        return this.sortOrder === 'asc' ? apyA - apyB : apyB - apyA;
      });

      return filtered;
    },
    selectedTypesLabel() {
      if (this.selectedTypes.length === this.types.length) return 'All Types';
      if (this.selectedTypes.length === 0) return 'Select Types';
      return this.selectedTypes
        .map((type) => type.charAt(0).toUpperCase() + type.slice(1))
        .join(', ');
    }
  },
  methods: {
    resetFilters() {
      this.searchQuery = '';
      this.selectedTypes = ['stable', 'degen', 'safe'];
      this.sortOrder = 'asc';
    }
  }
};
</script>

<style scoped>
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.subtitle-section {
  background: var(--background-dark);
  color: var(--text-dark);
}
.filters-section {
  background: var(--background-light);
}
.strategies-section {
  flex: 1;
  background: var(--background-light);
  color: var(--text-dark);
}
.lead {
  color: var(--text-dark);
  margin-bottom: 0;
}
.form-control,
.form-select {
  background: var(--background-light);
  border: 1px solid var(--border-color);
  color: var(--text-dark);
}
.form-check-input:checked {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}
.btn-custom {
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  color: var(--text-dark);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: opacity 0.2s;
}
.btn-custom:hover {
  opacity: 0.9;
}
.btn-custom:focus {
  outline: none;
  box-shadow: 0 0 0 0.2rem rgba(168, 255, 0, 0.25);
}
.btn-outline-custom {
  border: 1px solid var(--border-color);
  color: var(--text-dark);
  background: var(--background-light);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: 500;
}
.btn-outline-custom:hover {
  background: var(--background-dark);
  color: var(--text-light);
}
.dropdown-menu {
  background: var(--background-light);
  border: 1px solid var(--border-color);
}
.dropdown-item:hover {
  background: var(--background-dark);
  color: var(--text-light);
}
@media (max-width: 767.98px) {
  .filters-section .row {
    flex-direction: column;
  }
  .text-md-end {
    text-align: center !important;
  }
}
</style>