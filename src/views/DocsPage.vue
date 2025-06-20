<template>
  <div class="content">
    <!-- Core Features Section -->
    <div class="hero-section core-features-section py-5">
      <div class="container">
        <h2 class="section-title text-start mb-4">Core Features</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <!-- Feature 1 -->
          <div class="col d-flex flex-column align-items-center text-center">
            <img
              src="https://placehold.co/300x150/png"
              alt="Concentrated Liquidity"
              class="feature-image mb-3"
            />
            <h3>Concentrated Liquidity</h3>
            <p class="lead">Make your liquidity as efficient as possible</p>
          </div>
          <!-- Feature 2 -->
          <div class="col d-flex flex-column align-items-center text-center">
            <img
              src="https://placehold.co/300x150/png"
              alt="RePlynt"
              class="feature-image mb-3"
            />
            <h3>RePlynt</h3>
            <p class="lead">
              The autonomous engine that monitors, adjusts your positions and grows your profits
            </p>
          </div>
          <!-- Feature 3 -->
          <div class="col d-flex flex-column align-items-center text-center">
            <img
              src="https://placehold.co/300x150/png"
              alt="100% Self-custody"
              class="feature-image mb-3"
            />
            <h3>100% Self-custody</h3>
            <p class="lead">No vault, no lock, no commitment period</p>
          </div>
        </div>
      </div>
    </div>
    <!-- FAQ Section -->
    <div class="hero-section faq-section py-5">
      <div class="container">
        <h2 class="section-title text-start mb-4">FAQ</h2>
        <div class="accordion" id="faqAccordion">
          <!-- FAQ Item 1 -->
          <div class="accordion-item">
            <h2 class="accordion-header" id="faqHeading1">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse1"
                aria-expanded="true"
                aria-controls="faqCollapse1"
              >
                What is Plynt?
              </button>
            </h2>
            <div
              id="faqCollapse1"
              class="accordion-collapse collapse show"
              aria-labelledby="faqHeading1"
              data-bs-parent="#faqAccordion"
            >
              <div class="accordion-body">
                Plynt is a DeFi platform that optimizes liquidity, offers autonomous position management, and ensures 100% self-custody for users.
              </div>
            </div>
          </div>
          <!-- FAQ Item 2 -->
          <div class="accordion-item">
            <h2 class="accordion-header" id="faqHeading2">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse2"
                aria-expanded="false"
                aria-controls="faqCollapse2"
              >
                How does RePlynt work?
              </button>
            </h2>
            <div
              id="faqCollapse2"
              class="accordion-collapse collapse"
              aria-labelledby="faqHeading2"
              data-bs-parent="#faqAccordion"
            >
              <div class="accordion-body">
                RePlynt is an autonomous engine that monitors market conditions and adjusts your DeFi positions to maximize profits while minimizing risk.
              </div>
            </div>
          </div>
          <!-- FAQ Item 3 -->
          <div class="accordion-item">
            <h2 class="accordion-header" id="faqHeading3">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse3"
                aria-expanded="false"
                aria-controls="faqCollapse3"
              >
                Is my capital locked with Plynt?
              </button>
            </h2>
            <div
              id="faqCollapse3"
              class="accordion-collapse collapse"
              aria-labelledby="faqHeading3"
              data-bs-parent="#faqAccordion"
            >
              <div class="accordion-body">
                No, Plynt ensures 100% self-custody with no vaults, no locks, and no commitment periods, giving you full control over your assets.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocsPage'
};
</script>

<style scoped>
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.hero-section {
  background: var(--background-dark);
  color: var(--text-dark);
}
.section-title {
  font-size: 2rem;
  color: var(--text-dark);
}
.feature-image {
  width: 100%;
  max-width: 300px;
  height: 150px;
  object-fit: cover;
  border-radius: 0.5rem;
}
.lead {
  color: var(--text-dark);
}
.accordion-item {
  background: var(--background-light);
  border: 1px solid var(--border-color);
}
.accordion-button {
  background: var(--background-light);
  color: var(--text-dark);
  font-weight: 500;
}
.accordion-button:not(.collapsed) {
  background: var(--secondary-color);
  color: var(--text-light);
}
.accordion-button:focus {
  box-shadow: 0 0 0 0.2rem rgba(168, 255, 0, 0.25);
}
.accordion-body {
  color: var(--text-dark);
}
@media (max-width: 767.98px) {
  .section-title {
    text-align: center !important;
  }
}
</style>