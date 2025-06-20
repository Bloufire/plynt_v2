<template>
  <div class="card custom-card">
    <!-- Card Header -->
    <div class="card-header d-flex align-items-center">
      <img :src="headerImage" :alt="headerText + ' icon'" class="header-image rounded-circle me-3" />
      <h5 class="card-title mb-0">{{ headerText }}</h5>
    </div>
    <!-- Main Image with Overlay Text -->
    <div class="image-container">
      <img :src="mainImage" alt="Main card image" class="card-img-top main-image" />
      <span v-if="yieldText" class="yield-text">{{ yieldText }}</span>
    </div>
    <!-- Card Footer -->
    <div class="card-footer text-center">
      <button class="btn btn-custom" @click.prevent="openModal">{{ buttonText }}</button>
    </div>
    <!-- Modal -->
    <Teleport to="body">
      <div
        v-if="showModal"
        class="modal fade show"
        :id="modalId"
        tabindex="-1"
        :aria-labelledby="`${modalId}-Label`"
        aria-hidden="true"
        style="display: block; background: rgba(0, 0, 0, 0.5);"
        @click.self="closeModal"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <img
                :src="headerImage"
                :alt="headerText + ' icon'"
                class="header-image rounded-circle me-3"
              />
              <h5 class="modal-title" :id="`${modalId}-Label`">{{ headerText }}</h5>
              <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <!-- Left: Form -->
                <div class="col-md-6 d-flex flex-column justify-content-center">
                  <div class="mb-3">
                    <label for="investAmount" class="form-label">Investment Amount</label>
                    <input
                      type="number"
                      class="form-control"
                      id="investAmount"
                      placeholder="Enter amount"
                      min="0"
                      step="0.01"
                      v-model="investAmount"
                    />
                  </div>
                  <button class="btn btn-custom" @click="invest">Invest</button>
                </div>
                <!-- Right: Image -->
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                  <img :src="mainImage" alt="Main card image" class="modal-image" />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-custom" @click="closeModal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
export default {
  name: 'CustomCard',
  props: {
    headerImage: {
      type: String,
      required: true
    },
    headerText: {
      type: String,
      required: true
    },
    mainImage: {
      type: String,
      required: true
    },
    yieldText: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: 'Invest'
    }
  },
  data() {
    return {
      showModal: false,
      investAmount: null
    };
  },
  computed: {
    modalId() {
      return `modal-${this._uid}`;
    }
  },
  methods: {
    openModal() {
      this.showModal = true;
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.showModal = false;
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    },
    invest() {
      if (this.investAmount && this.investAmount > 0) {
        alert(`Investing ${this.investAmount} in ${this.headerText}`);
      } else {
        alert('Please enter a valid investment amount.');
      }
    }
  }
};
</script>

<style scoped>
.custom-card {
  background: var(--background-light);
  border: none;
  box-shadow: 0 4px 8px var(--shadow-color);
  transition: transform 0.2s;
}
.custom-card:hover {
  transform: translateY(-5px);
}
.card-header {
  background: var(--background-light);
  border-bottom: var(--border-color);
}
.header-image {
  width: 40px;
  height: 40px;
  object-fit: cover;
}
.image-container {
  position: relative;
}
.main-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.yield-text {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-light);
  background: rgba(0, 0, 0, 0.6);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}
.card-footer {
  background: var(--background-light);
  border-top: var(--border-color);
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
.modal-dialog {
  max-width: 75%;
}
.modal-content {
  background: var(--background-light);
  color: var(--text-dark);
  max-height: 75vh;
  overflow-y: auto;
}
.modal-header {
  border-bottom: 1px solid var(--border-color);
}
.modal-footer {
  border-top: 1px solid var(--border-color);
}
.modal-image {
  max-width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.5rem;
}
.form-control {
  background: var(--background-light);
  border: 1px solid var(--border-color);
  color: var(--text-dark);
}
.modal.fade.show {
  opacity: 1;
}
</style>